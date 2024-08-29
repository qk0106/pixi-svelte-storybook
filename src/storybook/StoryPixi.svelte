<script lang="ts">
	import {
		App,
		createApp,
		setAppContext,
		type Assets
	} from 'pixi-svelte';

	export let assets: Assets | undefined = undefined;

	const app = createApp();
	const { loaded } = app;

	setAppContext({ ...app, assets });
</script>

<App> 
	{#if $loaded}
		<slot />
	{/if}
</App>
