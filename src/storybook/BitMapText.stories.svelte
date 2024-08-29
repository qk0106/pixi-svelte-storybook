<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';
	import { BitMapText } from 'pixi-svelte';

	const assets = {
		font: { type: 'font', src: 'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/font/clash_font_white.xml' },
	} as const;

// 	const allText = `
// ~!@#$%^&*()-+,:;=
// 0123456789
// ABCDEFGHIJKLM
// NOPQRSTUVWXYZ
// ¥₩€₱₹₽
// ŔŖĶ"
// DKK
// `;

	const allText = 'BIT MAP FONTS ARE SUPPORTED!\nWOO YAY!';
</script>

<Meta
	title="pixi-svelte/BitMapText"
	component={BitMapText}
	argTypes={{
		x: { name: 'x', control: { type: 'number' } },
		y: { name: 'y', control: { type: 'number' } },
		zIndex: { name: 'zIndex', control: { type: 'number' } },
		value: { name: 'value', control: { type: 'text' } },
		style: { ame: 'style', control: { type: 'object' } },
		anchor: { name: 'anchor', control: { type: 'object' } },
		blendMode: {
			control: { type: 'select' },
			options: ['none', 'add', 'multiply', 'screen'],
		},
	}}
	args={{
		x: 0,
		y: 0,
		zIndex: 1,
		value: allText,
		blendMode: 'none',
		style: {
			fontName: 'clash_font_white',
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
	<StoryPixi {assets}>
		<BitMapText {...args} />
	</StoryPixi>
</Story>
