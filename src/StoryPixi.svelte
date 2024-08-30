<script lang="ts">
	import {
		App,
		setAppContext,
		createApp,
	} from 'pixi-svelte';

	export let assets;

	const app = createApp();
	const { loaded } = app;

	setAppContext({ ...app, assets });
</script>

<App> 
	{#if $loaded}
		<slot />
	{/if}
</App>
