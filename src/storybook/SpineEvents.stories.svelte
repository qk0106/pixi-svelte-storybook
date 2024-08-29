<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import {
		Text,
		SpineProvider,
		SpineTrack,
	} from 'pixi-svelte';

	import StoryPixi from './StoryPixi.svelte';

	const assets = {
		spineEvents: {
			type: 'spine',
			src: {
				skeleton:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/spine-events/events.json',
				atlas:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/spine-events/events.atlas',
			},
		},
	} as const;

	let onComplete = 'not yet';
	let onCompleteTrack2 = 'not yet';
	let onEvent = 'not yet';
</script>

<Meta
	title="pixi-svelte/Spine/Events"
	component={SpineProvider}
	argTypes={{
		width: { name: 'width', control: { type: 'number' } },
		height: { name: 'height', control: { type: 'number' } },
		x: { name: 'x', control: { type: 'number' } },
		y: { name: 'y', control: { type: 'number' } },
		zIndex: { name: 'zIndex', control: { type: 'number' } },
		play: { name: 'play', control: { type: 'boolean' } },
		timeScale: { name: 'timeScale', control: { type: 'number' } },
		anchor: { name: 'anchor', control: { type: 'object' } },
	}}
	args={{
		width: 30,
		x: 20,
		y: 200,
		zIndex: 1,
		play: true,
		timeScale: 1,
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<SpineProvider {...args} key="spineEvents">
			<SpineTrack
				track="baseTrack"
				loop
				on:event={({ detail: { entry, event } }) => {
					onEvent = 'done!';
					console.log('spine event:', event.data.name, entry, event);
				}}
				on:complete={({ detail: entry }) => {
					onComplete = 'done!';
					console.log('complete event', entry);
				}}
			/>
			<SpineTrack
				index={1}
				track="scaleTrack"
				loop
				on:complete={({ detail: entry }) => {
					onCompleteTrack2 = 'done!';
					console.log('track2 complete event', entry);
				}}
			/>
		</SpineProvider>
		<Text
			x={args.x}
			y={args.y + 200}
			value="on:complete: {onComplete}"
			style={{ fill: 0x000000 }}
		/>
		<Text
			x={args.x}
			y={args.y + 300}
			value="on:completeTrack2: {onCompleteTrack2}"
			style={{ fill: 0x000000 }}
		/>
		<Text x={args.x} y={args.y + 400} value="on:event: {onEvent}" style={{ fill: 0x000000 }} />
	</StoryPixi>
</Story>
