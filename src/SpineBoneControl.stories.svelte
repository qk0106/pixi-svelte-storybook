<script lang="ts" context="module">
	import { SpineProvider } from 'pixi-svelte';

  export const meta = {
    title: "pixi-svelte/Spine/BoneControl",
    component: SpineProvider,
		args: {
			width: 10,
			x: 600,
			y: 400,
			zIndex: 1,
			play: true,
			timeScale: 1,
			boneName: 'ALL_Mover',
		}
  }
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';

	import {
		SpineTrack,
		SpineBone,
		MousePositionProvider,
	} from 'pixi-svelte';

	const assets = {
		fox: {
			type: 'spine',
			src: {
				skeleton:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/fox/fox.json',
				atlas:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/fox/fox.atlas',
			},
		},
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
</script>

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<SpineProvider key="tracks" x={600} y={400} width={2000} />
		<MousePositionProvider let:x let:y>
			{@const ratio = 100 / args.width}
			<SpineProvider key="fox" {...args}>
				<SpineTrack track="animation" loop />
				<SpineBone name={args.boneName} x={ratio * (x - args.x) - 1000} y={ratio * (y - args.y)} />
			</SpineProvider>
		</MousePositionProvider>
	</StoryPixi>
</Story>
