<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';
	
	import sprites from './assets/sprites';
	import guitar from './assets/guitar';
	import font from './assets/font';

	import { Sprite, Spine, SpineSlot } from 'pixi-svelte';
</script>

<Meta
	title="Pixi-Svelte/Spine"
	component={Spine}
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
		y: 100,
		zIndex: 1,
		play: true,
		timeScale: 1,
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview" >
	<StoryPixi assets={{ guitar, sprites, font }}>
		<Spine
			loop
			{...args}
			key="guitar"
			animationName="transition_loop"
		>
			<SpineSlot slotName="stage_cloud">
				<Sprite key="logo.png" width={500} height={500} />
			</SpineSlot>
			<SpineSlot slotName="stage_cloud3">
				<Sprite key="logo.png" width={500} height={500} />
			</SpineSlot>
		</Spine>
		<Sprite x={args.x + args.width} key="logo.png" width={500} height={500} />
	</StoryPixi>
</Story>
