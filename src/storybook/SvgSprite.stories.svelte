<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';
	import svg from './assets/clouds.svg';
	
	import { SvgSprite } from 'pixi-svelte';
</script>

<Meta
	title="Pixi-Svelte/SvgSprite"
	component={SvgSprite}
	argTypes={{
		x: { name: 'x', control: { type: 'number' } },
		y: { name: 'y', control: { type: 'number' } },
		width: { name: 'width', control: { type: 'number' } },
		height: { name: 'height', control: { type: 'number' } },
		zIndex: { name: 'zIndex', control: { type: 'number' } },
		anchor: { name: 'anchor', control: { type: 'object' } },
	}}
	args={{
		x: 50,
		y: 50,
		width: 690,
		height: 460,
		zIndex: 1,
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview" >
	<StoryPixi>
		<SvgSprite {...args} {svg} />
	</StoryPixi>
</Story>
