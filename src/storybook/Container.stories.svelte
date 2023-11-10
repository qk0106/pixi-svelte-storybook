<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';
	import font from './assets/font';
	import guitar from './assets/guitar';
	import sprites from './assets/sprites';
	
	import { BitMapText, Sprite, Spine, Text, Container } from 'pixi-svelte';
</script>

<Meta
	title="Pixi-Svelte/Container"
	component={Container}
	argTypes={{
		x: { name: 'x', control: { type: 'number' } },
		y: { name: 'y', control: { type: 'number' } },
		zIndex: { name: 'zIndex', control: { type: 'number' } },
		pivot: { name: 'pivot', control: { type: 'object' } },
	}}
	args={{
		x: 300,
		y: 300,
		zIndex: 1,
		pivot: { x: 0, y: 0 },
		rotation: 3.14,
	}}
/>

<Story let:args name="Preview" >
	<StoryPixi assets={{ guitar, sprites, font }}>
		<Container {...args}>
			<BitMapText
				value="HELLO WORLD!"
				style={{
					fontName: 'sunset',
					fontSize: 50,
					fill: 0x000000,
					fontWeight: 'bold',
					maxWidth: 900,
					letterSpacing: 0,
				}} />
			<Text value="Hello World" style={{ fill: 0x000000 }} />
			<Sprite key="logo.png" width={300} height={200} />
			<Spine
				width={100}
				key="guitar"
				animationName="transition_loop"
				loop
				slotName="stage_cloud"
			/>
		</Container>
	</StoryPixi>
</Story>
