<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';

	import { Text } from 'pixi-svelte';
</script>

<Meta title="pixi-svelte/App" />

<Story name="Preview" >
	<StoryPixi>
		<Text value="App" style={{ fill: 0x000000 }} />
	</StoryPixi>
</Story>
