<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import StoryPixi from './StoryPixi.svelte';
</script>

<Meta title="Pixi-Svelte/App" />

<Story name="Preview" >
	<StoryPixi>
		<Text value="Text" style={{ fill: 0x000000 }} />
	</StoryPixi>
</Story>
