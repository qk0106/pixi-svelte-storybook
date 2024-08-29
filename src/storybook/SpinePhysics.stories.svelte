<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import StoryPixi from './StoryPixi.svelte';
	import {
		SpineProvider,
		SpineTrack,
	} from 'pixi-svelte';

	const assets = {
		physics: {
			type: 'spine',
			src: {
				skeleton:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/physics-spine/cg_bg.json',
				atlas:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/physics-spine/cg_bg.atlas',
			}
		},
	} as const;
</script>

<Meta
	title="pixi-svelte/Spine/Physics"
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
		width: 600,
		x: 300,
		y: 300,
		zIndex: 1,
		play: true,
		timeScale: 1,
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<SpineProvider key="physics" {...args}>
			<SpineTrack track="hidebonus" loop />
			<SpineTrack index={1} track="base_burst_land" loop />
		</SpineProvider>
	</StoryPixi>
</Story>
