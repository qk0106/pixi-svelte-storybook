<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import {
		SpineProvider,
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
	} as const;
</script>

<Meta
	title="pixi-svelte/Spine/MeshSequence"
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
		width: 250,
		x: 200,
		y: 300,
		zIndex: 1,
		play: true,
		timeScale: 1,
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<SpineProvider loop {...args} key="spineMeshSequence">
			<SpineTrack track="animation" loop />
		</SpineProvider>
	</StoryPixi>
</Story>
