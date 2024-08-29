<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import StoryPixi from './StoryPixi.svelte';
	import {
		SpineProvider,
		SpineTrack,
		Container,
		Rectangle,
	} from 'pixi-svelte';

	const assets = {
		spineBoy: {
			type: 'spine',
			src: {
				skeleton:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/spine-pixi-examples/spineboy-pro.json',
				atlas:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/spine-pixi-examples/spineboy-pma.atlas',
			},
		},
	} as const;

	let track = 'walk';
	let tint = 0xffffff;
</script>

<Meta
	title="pixi-svelte/Container Interactions"
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
		width: 250,
		x: 300,
		y: 500,
		zIndex: 1,
		play: true,
		timeScale: 1,
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<Container>
			<Rectangle
				eventMode="static"
				cursor="cell"
				backgroundColor={0x000000}
				on:click={() => alert('hi')}
			/>

			<Container
				eventMode="static"
				cursor="pointer"
				on:click={() => console.log('click!')}
				on:pointerDown={() => (tint = Math.floor(Math.random() * 16777215))}
				on:pointerEnter={() => (track = 'run')}
				on:pointerLeave={() => (track = 'walk')}
			>
				<SpineProvider key="spineBoy" {...args} {tint}>
					<SpineTrack {track} loop />
				</SpineProvider>
			</Container>
		</Container>
	</StoryPixi>
</Story>
