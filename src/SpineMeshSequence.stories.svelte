<script lang="ts" context="module">
	import { SpineProvider } from 'pixi-svelte';

  export const meta = {
    title: "pixi-svelte/Spine/MeshSequence",
    component: SpineProvider,
		args: {
			width: 250,
			x: 200,
			y: 300,
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
		SpineTrack,
	} from 'pixi-svelte';

	import StoryPixi from './StoryPixi.svelte';

	const assets = {
		spineMeshSequence: {
			type: 'spine',
			src: {
				skeleton:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/spine-mesh-sequence/meshsequence.json',
				atlas:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/spine-mesh-sequence/meshsequence.atlas',
			},
		},
	};
</script>

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<SpineProvider loop {...args} key="spineMeshSequence">
			<SpineTrack track="animation" loop />
		</SpineProvider>
	</StoryPixi>
</Story>
