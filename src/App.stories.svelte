<script lang="ts" context="module">
	import { Text } from 'pixi-svelte';

  export const meta = {
    title: "pixi-svelte/App",
    component: Text
  }
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';
</script>

<Story name="Preview" >
	<StoryPixi>
		<Text value="App" style={{ fill: 0x000000 }} />
	</StoryPixi>
</Story>
