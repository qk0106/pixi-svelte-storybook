<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';

	import font from './assets/font';

	import { BitMapText } from 'pixi-svelte';

	const allText = `
~!@#$%^&*()-+,:;=
0123456789
ABCBCDEFGHIJKLM
NOPQRSTUVWXYZ
¥₩€₱₹₽
ŔŖĶ"
DKK`;
</script>

<Meta
	title="Pixi-Svelte/BitMapText"
	component={BitMapText}
	argTypes={{
		x: { name: 'x', control: { type: 'number' } },
		y: { name: 'y', control: { type: 'number' } },
		zIndex: { name: 'zIndex', control: { type: 'number' } },
		value: { name: 'value', control: { type: 'text' } },
		style: { ame: 'style', control: { type: 'object' } },
		anchor: { name: 'anchor', control: { type: 'object' } },
	}}
	args={{
		x: 0,
		y: 0,
		zIndex: 1,
		value: allText,
		style: {
			fontName: 'sunset',
			fontSize: 50,
			fill: 0x000000,
			fontWeight: 'bold',
			maxWidth: 900,
			letterSpacing: 0,
		},
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview" >
	<StoryPixi assets={{ font }}>
		<BitMapText {...args} />
	</StoryPixi>
</Story>
