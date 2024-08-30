<script lang="ts" context="module">
	import { BitMapText } from 'pixi-svelte';

	const allText = 'BIT MAP FONTS ARE SUPPORTED!\nWOO YAY!';

  export const meta = {
    title: "pixi-svelte/BitMapText",
    component: BitMapText,
		args: {
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
		}
  }
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';

	const assets = {
		font: { type: 'font', src: 'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/font/clash_font_white.xml' },
	};

// 	const allText = `
// ~!@#$%^&*()-+,:;=
// 0123456789
// ABCDEFGHIJKLM
// NOPQRSTUVWXYZ
// ¥₩€₱₹₽
// ŔŖĶ"
// DKK
// `;

</script>

<Story let:args name="Preview" >
	<StoryPixi {assets}>
		<BitMapText {...args} />
	</StoryPixi>
</Story>
