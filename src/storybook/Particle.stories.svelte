<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	
	import StoryPixi from './StoryPixi.svelte';
	import coins from './assets/coins';
	import fountainCoinsConfig from './assets/fountainCoinsConfig.json';

	import { Particle } from 'pixi-svelte';

</script>

<Meta
	title="Pixi-Svelte/Particle"
	component={Particle}
	argTypes={{
		rotation: { name: 'rotation', control: { type: 'number' }},
		skew: { name: 'skew', control: { type: 'number' }},
		visible: { name: 'visible', control: { type: 'boolean' }},
		x: { name: 'x', control: { type: 'number' }},
		y: { name: 'y', control: { type: 'number' }},
		width: { name: 'width', control: { type: 'number' }},
		height: { name: 'height', control: { type: 'number' }},
		zIndex: { name: 'zIndex', control: { type: 'number' }},
		alpha: { name: 'alpha', control: { type: 'number' }},
		emit: { name: 'emit', control: { type: 'boolean' }},
		emitSpeed: { name: 'emitSpeed', control: { type: 'number' }},
		key: { name: 'key', control: { type: 'text' }},
		config: { name: 'config', control: { type: 'object' }},
		artOptions: { name: 'artOptions', control: { type: 'object' }},
	}}
	args={{
		rotation: 0,
		skew: 0,
		visible: true,
		x: 400,
		y: 400,
		width: 100,
		height: 100,
		zIndex: 1,
		alpha: 1,
		emit: true,
		emitSpeed: 0.00234,
		key: 'coins',
		config: fountainCoinsConfig,
		artOptions: { framerate: 8 },
	}}
/>

<Story let:args name="Preview" >
	<StoryPixi assets={{ coins }}>
		<Particle {...args} />
	</StoryPixi>
</Story>
