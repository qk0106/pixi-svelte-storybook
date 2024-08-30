<script lang="ts" context="module">
	import { Graphics } from 'pixi-svelte';

  export const meta = {
    title: "pixi-svelte/Spine/SpineProvider",
    component: Graphics,
		args: {
			width: 250,
			x: 300,
			y: 100,
			zIndex: 1,
			play: true,
			timeScale: 1,
			anchor: { x: 0, y: 0 },
		}
  }
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';

	import {
		SpineProvider,
		SpineTrack,
		Sprite,
		SpineSlot,
	} from 'pixi-svelte';

	const assets = {
		guitar: {
			type: 'spine',
			src: {
				skeleton:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/guitar/transition_char.json',
				atlas:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/guitar/transition_char.atlas',
			},
		},
		sprites: {
			type: 'sprites',
			src: 'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/sprites/sprites.json',
		},
	};
</script>

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<SpineProvider loop {...args} key="guitar">
			<SpineTrack track="transition_loop" loop />
			<SpineSlot slotName="stage_cloud">
				<Sprite key="logo.png" width={500} height={500} />
			</SpineSlot>
			<SpineSlot slotName="stage_light_a_beam_1">
				<Sprite key="logo.png" width={500} height={500} />
			</SpineSlot>
		</SpineProvider>
		<Sprite x={args.x + args.width} key="logo.png" width={500} height={500} />
	</StoryPixi>
</Story>
