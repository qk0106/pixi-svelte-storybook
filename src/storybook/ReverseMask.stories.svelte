<script lang="ts">
	import * as PIXI from 'pixi.js-legacy';
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';

	import {
		Container,
		Rectangle,
		Circle,
	} from 'pixi-svelte';
</script>

<Meta
	title="pixi-svelte/ReverseMask"
	component={Circle}
/>

<Story let:args name="Preview" >
	<StoryPixi>
			<Rectangle width={200} height={200} backgroundColor={0xd32133}  />
			<Container filters={[new PIXI.filters.AlphaFilter()]}>
			<Rectangle width={100} height={100} backgroundColor={0x732133}  />
			<Circle diameter={50} backgroundColor={0x000000} blendMode={PIXI.BLEND_MODES.ERASE} />
		</Container>
	</StoryPixi>
</Story>
