<script lang="ts" context="module">
	import { Container } from 'pixi-svelte';

  export const meta = {
    title: "pixi-svelte/Container",
    component: Container,
		args: {
			x: 300,
			y: 300,
			zIndex: 1,
			pivot: { x: 0, y: 0 },
			rotation: 3.14,
		}
  }
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';
	import {
		BitMapText,
		Sprite,
		SpineProvider,
		SpineTrack,
		Text,
	} from 'pixi-svelte';

	const assets = {
		guitar: {
			type: 'spine',
			src: {
				skeleton:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/guitar/transition_char.json',
				atlas:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/guitar/transition_char.atlas',
			}
		},
		sprites: {
			type: 'sprites',
			src: 'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/sprites/sprites.json',
		},
		font: {
			type: 'font',
			src: 'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/font/desyrel.xml',
		},
	};
</script>

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<Container {...args}>
			<BitMapText
				value="HELLO WORLD!"
				style={{
					fontName: 'Desyrel',
					fontSize: 50,
					fill: 0x000000,
					fontWeight: 'bold',
					maxWidth: 900,
					letterSpacing: 0,
				}}
			/>
			<Text value="Hello World" style={{ fill: 0x000000 }} />
			<Sprite key="logo.png" width={300} height={200} />
			<SpineProvider width={100} key="guitar">
				<SpineTrack track="transition_loop" loop />
			</SpineProvider>
		</Container>
	</StoryPixi>
</Story>
