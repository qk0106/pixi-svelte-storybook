<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';
	
	import { Text } from 'pixi-svelte';
</script>

<Meta
	title="Pixi-Svelte/Text"
	component={Text}
	argTypes={{
		x: { name: 'x', control: { type: 'number' } },
		y: { name: 'y', control: { type: 'number' } },
		zIndex: { name: 'zIndex', control: { type: 'number' } },
		value: { name: 'value', control: { type: 'text' } },
		style: {
			name: 'style',
			control: { type: 'object' },
		},
		anchor: { name: 'anchor', control: { type: 'object' } },
	}}
	args={{
		x: 50,
		y: 50,
		zIndex: 1,
		value: 'Hello world',
		style: { fill: 0x000000, fontWeight: 'bold' },
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview" >
	<StoryPixi>
		<Text {...args} />
	</StoryPixi>
</Story>
