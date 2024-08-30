<script lang="ts" context="module">
	import { SpineProvider } from 'pixi-svelte';

  export const meta = {
    title: "pixi-svelte/Spine/MultipleImages",
    component: SpineProvider,
		args: {
			width: 50,
			x: 500,
			y: 500,
			zIndex: 1,
			play: true,
			timeScale: 1,
			anchor: { x: 0, y: 0 },
		}
  }
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';
	import StoryPixi from './StoryPixi.svelte';

	import {
		SpineTrack,
	} from 'pixi-svelte';

	const assets = {
		multi: {
			type: 'spine',
			src: {
				skeleton:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/multi-img-spine/lol_fs_screen.json',
				atlas:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/multi-img-spine/lol_fs_screen.atlas',
			}
		},
	};
</script>

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<SpineProvider key="multi" {...args}>
			<SpineTrack track="fs_won_intro" loop />
		</SpineProvider>
	</StoryPixi>
</Story>
