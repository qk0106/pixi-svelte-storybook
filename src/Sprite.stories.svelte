<script lang="ts" context="module">
	import { Graphics } from 'pixi-svelte';

  export const meta = {
    title: "pixi-svelte/Sprite",
    component: Graphics,
		args: {
			x: 50,
			y: 50,
			width: 200,
			height: 200,
			zIndex: 1,
			anchor: { x: 0, y: 0 },
		}
  }
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';
	import {
		Sprite,
	} from 'pixi-svelte';
</script>

<Story let:args name="From Sprite" >
	<StoryPixi assets={{
		sprite: { type: 'sprite', src: 'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/fighter/fighter.png' },
	}}>
		<Sprite {...args} key="sprite" />
	</StoryPixi>
</Story>

<Story let:args name="From Sprites" >
	<StoryPixi assets={{
		sprites: { type: 'sprites', src: 'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/sprites/sprites.json' },
	}}>
		<Sprite {...args} key="reels.png" />
	</StoryPixi>
</Story>
