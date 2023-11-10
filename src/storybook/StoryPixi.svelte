<script lang="ts">
	import { App, setAppContext, createApp, type Assets } from 'pixi-svelte';

	export let assets: Assets = undefined;

	const app = createApp();
	const { loaded } = app;

	setAppContext({ ...app, assets });
</script>

<App> 
	{#if $loaded}
		<slot />
	{/if}
</App>
