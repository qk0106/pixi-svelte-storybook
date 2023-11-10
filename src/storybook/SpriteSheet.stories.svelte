<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';
	
	import fighter from './assets/fighter';

	import { SpriteSheet } from 'pixi-svelte';
</script>

<Meta
	title="Pixi-Svelte/SpriteSheet (AnimatedSprite)"
	component={SpriteSheet}
	argTypes={{
		width: { name: 'width', control: { type: 'number' } },
		height: { name: 'height', control: { type: 'number' } },
		x: { name: 'x', control: { type: 'number' } },
		y: { name: 'y', control: { type: 'number' } },
		zIndex: { name: 'zIndex', control: { type: 'number' } },
		play: { name: 'play', control: { type: 'boolean' } },
		animationSpeed: { name: 'animationSpeed', control: { type: 'number' } },
		anchor: { name: 'anchor', control: { type: 'object' } },
	}}
	args={{
		width: 100,
		height: 100,
		x: 50,
		y: 50,
		zIndex: 1,
		play: true,
		animationSpeed: 1,
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview" >
	<StoryPixi assets={{ fighter }}>
		<SpriteSheet {...args} key="fighter" loop />
	</StoryPixi>
</Story>
