<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import StoryPixi from './StoryPixi.svelte';

	import {
		SpineProvider,
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
	} as const;
</script>

<Meta
	title="pixi-svelte/Spine/MultipleImages"
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
		width: 50,
		x: 500,
		y: 500,
		zIndex: 1,
		play: true,
		timeScale: 1,
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<SpineProvider key="multi" {...args}>
			<SpineTrack track="fs_won_intro" loop />
		</SpineProvider>
	</StoryPixi>
</Story>
