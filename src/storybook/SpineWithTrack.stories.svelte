<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Spine } from 'pixi-svelte';

	import StoryPixi from './StoryPixi.svelte';
	import spineTrack from './assets/spineTrack';


	export const ANIMATION_NAMES = [
		'fog',
		'idle',
		'lightning',
		'rain',
		undefined
	] as const;

</script>

<Meta
	title="Pixi-Svelte/SpineWithTrack"
	component={Spine}
	argTypes={{
		track1: {control: { type: 'select' }, options: ANIMATION_NAMES },
		track2: {control: { type: 'select' }, options: ANIMATION_NAMES },
		track3: {control: { type: 'select' }, options: ANIMATION_NAMES },
		track4: {control: { type: 'select' }, options: ANIMATION_NAMES },
		loop: { type: 'boolean'},

		width: { name: 'width', control: { type: 'number' } },
		height: { name: 'height', control: { type: 'number' } },
		x: { name: 'x', control: { type: 'number' } },
		y: { name: 'y', control: { type: 'number' } },
		zIndex: { name: 'zIndex', control: { type: 'number' } },
		play: { name: 'play', control: { type: 'boolean' } },
		timeScale: { name: 'timeScale', control: { type: 'number' } },
		anchor: { name: 'anchor', control: { type: 'object' } },
		mixDuration: { type: 'number'},
	}}
	args={{
		track1: ANIMATION_NAMES[0],
		track2: ANIMATION_NAMES[1],
		track3: ANIMATION_NAMES[2],
		track4: ANIMATION_NAMES[3],
		loop: true,
		mixDuration: 0,

		
		width: 1000,
		x: 600,
		y: 200,
		zIndex: 1,
		play: true,
		timeScale: 1,
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview" >
	<StoryPixi assets={{ spineTrack }}>
		<Spine
			{...args}
			key="spineTrack"
		/>
	</StoryPixi>
</Story>
