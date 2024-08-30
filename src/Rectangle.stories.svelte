<script lang="ts" context="module">
	import { Rectangle } from 'pixi-svelte';

  export const meta = {
    title: "pixi-svelte/Rectangle",
    component: Rectangle,
		args: {
			width: 100,
			height: 100,
			alpha: 0.9,
			borderWidth: 2,
			backgroundColor: 0x522000,
			borderColor: 0x1dc000,
			borderRadius: 0.5,
			x: 50,
			y: 50,
			zIndex: 1,
			isMask: false,
		}
  }
</script>

<script lang="ts">
	import { BlurFilter } from 'pixi.js-legacy';
	import { Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';

	import { Text } from 'pixi-svelte';

	const filter = new BlurFilter(0);
	filter.blur = 10;
</script>

<Story let:args name="Preview">
	<StoryPixi>
		<Text {...args} value="hello world" />
		<Rectangle {...args} filters={[filter]} />
	</StoryPixi>
</Story>
