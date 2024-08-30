<script lang="ts" context="module">
	import { Graphics } from 'pixi-svelte';

  export const meta = {
    title: "pixi-svelte/Spine/SpineBoy",
    component: Graphics,
		args: {
			width: 250,
			x: 300,
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
		SpineProvider,
		SpineTrack,
	} from 'pixi-svelte';

	const assets = {
		spineBoy: {
			type: 'spine',
			src: {
				skeleton:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/spine-pixi-examples/spineboy-pro.json',
				atlas:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/spine-pixi-examples/spineboy-pma.atlas',
			},
		},
	};
</script>

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<SpineProvider key="spineBoy" {...args}>
			<SpineTrack track="walk" loop />
		</SpineProvider>
	</StoryPixi>
</Story>
