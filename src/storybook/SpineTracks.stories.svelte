<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import {
		Text,
		SpineProvider,
		SpineTrack,
	} from 'pixi-svelte';

	import StoryPixi from './StoryPixi.svelte';

	const assets = {
		tracks: {
			type: 'spine',
			src: {
				skeleton:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/tracks/feature_background.json',
				atlas:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/tracks/feature_background.atlas',
			},
		},
	} as const;

	const ANIMATION_NAMES = ['fog', 'idle', 'lightning', 'rain', 'transition'] as const;

	let track1: undefined | string = undefined;
	let track2: undefined | string = undefined;
	let track3 = 'fog';
	let track4: undefined | string = undefined;
	let loop1 = true;
	let mixDuration2 = 5;
	let timeScale4 = 1;

	const waitForTimeout = (time: number) =>
		new Promise<void>((resolve) => {
			const timeout = setTimeout(() => {
				clearTimeout(timeout);
				resolve();
			}, time);
		});

	const ROTATION_TIMEOUT = 6000;

	const rotateTracks = async () => {
		track1 = 'idle';
		track4 = 'rain';
		await waitForTimeout(ROTATION_TIMEOUT);
		timeScale4 = 10;
		track2 = 'lightning';
		await waitForTimeout(ROTATION_TIMEOUT);
		track1 = undefined;
		track4 = undefined;
	};

	rotateTracks();

	$: tracks = {
		track1: track1 ?? 'undefined',
		track2: track2 ?? 'undefined',
		track3: track3 ?? 'undefined',
		track4: track4 ?? 'undefined',
	};
</script>

<Meta
	title="pixi-svelte/Spine/Tracks"
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
		animationName: {
			control: { type: 'select' },
			options: ANIMATION_NAMES,
		},
		mixDuration: { type: 'number' },
		loop: { type: 'boolean' },
	}}
	args={{
		loop: true,
		mixDuration: 0,
		// animationName: "idle",
		width: 1500,
		x: 350,
		y: 250,
		zIndex: 1,
		play: true,
		timeScale: 1,
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<SpineProvider {...args} key="tracks">
			<SpineTrack index={1} track={track1} loop={loop1} />
			<SpineTrack index={2} track={track2} mixDuration={mixDuration2} />
			<SpineTrack index={3} track={track3} loop />
			<SpineTrack index={9} track={track4} loop timeScale={timeScale4} />
		</SpineProvider>
		<Text value={JSON.stringify(tracks)} style={{ fill: 0x000000 }} />
	</StoryPixi>
</Story>
