<script lang="ts" context="module">
	import { Circle } from 'pixi-svelte';

  export const meta = {
    title: "pixi-svelte/ReverseMask",
    component: Circle,
		args: {
			x: 50,
			y: 50,
			zIndex: 1,
			isMask: false,
			pivot: { x: 0, y: 0 },
		}
  }
</script>

<script lang="ts">
	import * as PIXI from 'pixi.js-legacy';
	import { Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';

	import {
		Container,
		Rectangle,
	} from 'pixi-svelte';
</script>

<Story let:args name="Preview" >
	<StoryPixi>
			<Rectangle width={200} height={200} backgroundColor={0xd32133}  />
			<Container filters={[new PIXI.filters.AlphaFilter()]}>
				<Rectangle width={100} height={100} backgroundColor={0x732133}  />
				<Circle diameter={50} backgroundColor={0x000000} blendMode={PIXI.BLEND_MODES.ERASE} />
			</Container>
	</StoryPixi>
</Story>
