<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import { App, Text } from 'pixi-svelte';
	import StoryPixiApp from '../components/StoryPixiApp.svelte';

	const { Story } = defineMeta({
		title: "pixi-svelte/App",
		component: App,
	});
</script>

<Story name="Preview">
	<StoryPixiApp assets={{}}>
		<Text text="App" style={{ fill: 0x000000 }} />
	</StoryPixiApp>
</Story>
