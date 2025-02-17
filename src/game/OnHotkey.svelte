<script lang="ts">
	import { getAppContext } from 'pixi-svelte';
	import { waitForTimeout, createInterruptible } from './utils';

	import type { HotKeyEmitterEvent } from './types';
	import { onDestroy } from 'svelte';

	type Props = {
		hotkey: string;
		disabled?: boolean;
		onpress?: () => void;
		onpressend?: () => void;
		onhold?: () => void;
		onholdend?: () => void;
	};

	const props: Props = $props();
	const context = getAppContext<HotKeyEmitterEvent>();
	const interruptible = createInterruptible();
	const WAIT_TO_HOLD_TIMEOUT = 400;
	let isHolding = $state(false);
	let isWaitingToHold = $state(false);

	const holdTimeoutStart = async () => {
		isWaitingToHold = true;
		const { interrupted } = await interruptible.add(() => waitForTimeout(WAIT_TO_HOLD_TIMEOUT));
		if (!interrupted) {
			isHolding = true;
			props.onhold?.();
		}
	};

	const holdTimeoutStop = () => {
		isWaitingToHold = false;
		interruptible.interrupt();
		interruptible.clear();
	};

	const keyDown = () => {
		if (!isWaitingToHold) holdTimeoutStart();
		if (!isHolding) props.onpress?.();
	};

	const keyUp = () => {
		if (isWaitingToHold) holdTimeoutStop();

		if (isHolding) {
			props.onholdend?.();
		} else {
			props.onpressend?.();
		}

		isHolding = false;
	};

	context.stateApp.eventEmitter.registerOnMount({
		hotKey: (event) => {
			if (props.disabled) return;
			if (event.key !== props.hotkey) return;
			if (event.action === 'keyUp') return keyUp();
			if (event.action === 'keyDown') return keyDown();
		},
	});

	$effect(() => {
		if (props.disabled) keyUp();
	});

	onDestroy(() => keyUp());

	$effect(() => {
		if (isHolding) props.onhold?.();
	});
</script>
