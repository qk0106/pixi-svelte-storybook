<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';
	
	import fighter from './assets/fighter/fighter.png';
	import sprites from './assets/sprites';

	import { Sprite, createAsset } from 'pixi-svelte';
</script>

<Meta
	title="Pixi-Svelte/Sprite"
	component={Sprite}
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
		width: 200,
		height: 200,
		zIndex: 1,
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Basic" >
	<StoryPixi assets={{ fighter: createAsset({ img: fighter }) }}>
		<Sprite {...args} key="fighter" />
	</StoryPixi>
</Story>

<Story let:args name="Atlas" >
	<StoryPixi assets={{ sprites }}>
		<Sprite {...args} key="reels.png" />
	</StoryPixi>
</Story>
