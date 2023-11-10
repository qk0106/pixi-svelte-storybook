<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';
	
	import { Rectangle } from 'pixi-svelte';
</script>

<Meta
	title="Pixi-Svelte/Rectangle"
	component={Rectangle}
	argTypes={{
		width: { name: 'width', control: { type: 'number' } },
		height: { name: 'height', control: { type: 'number' } },
		alpha: { name: 'alpha', control: { type: 'number' } },
		borderWidth: { name: 'borderWidth', control: { type: 'number' } },
		backgroundColor: {
			name: 'backgroundColor',
			control: { type: 'select', options: [0xffffff, 0x000000] },
		},
		borderColor: {
			name: 'borderColor',
			control: { type: 'select', options: [0xffffff, 0x000000] },
		},
		borderRadius: { name: 'borderRadius', control: { type: 'number' } },
		x: { name: 'x', control: { type: 'number' } },
		y: { name: 'y', control: { type: 'number' } },
		zIndex: { name: 'zIndex', control: { type: 'number' } },
		isMask: { name: 'isMask', control: { type: 'boolean' } },
	}}
	args={{
		width: 100,
		height: 100,
		alpha: 1,
		borderWidth: 2,
		backgroundColor: 0x522000,
		borderColor: 0x1dc000,
		borderRadius: 0.5,
		x: 50,
		y: 50,
		zIndex: 1,
		isMask: false,
	}}
/>

<Story let:args name="Preview" >
	<StoryPixi>
		<Rectangle {...args} />
	</StoryPixi>
</Story>
