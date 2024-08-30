<script lang="ts" context="module">
	import { Graphics } from 'pixi-svelte';

  export const meta = {
    title: "pixi-svelte/Spine/Tracks",
    component: Graphics,
		args: {
			loop: true,
			mixDuration: 0,
			width: 1500,
			x: 550,
			y: 250,
			zIndex: 1,
			play: true,
			timeScale: 1,
			anchor: { x: 0, y: 0 },
		}
  }
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';

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
	};

	const ANIMATION_NAMES = ['fog', 'idle', 'lightning', 'rain', 'transition'];

	let track1 = undefined;
	let track2 = undefined;
	let track3 = 'fog';
	let track4 = undefined;
	let loop1 = true;
	let mixDuration2 = 5;
	let timeScale4 = 1;

	const waitForTimeout = (time) =>
		new Promise((resolve) => {
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

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<SpineProvider {...args} key="tracks">
			<SpineTrack index={1} track={track1} loop={loop1} />
			<SpineTrack index={2} track={track2} mixDuration={mixDuration2} />
			<SpineTrack index={3} track={track3} loop />
			<SpineTrack index={9} track={track4} loop timeScale={timeScale4} />
		</SpineProvider>
		<Text value={JSON.stringify(tracks, undefined, 2)} style={{ fill: 0x000000 }} />
	</StoryPixi>
</Story>
