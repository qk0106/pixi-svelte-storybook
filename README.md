# pixi-svelte
Use PixiJS in a declarative way with Svelte.

## Example of usage
### Text
```ts
<script lang="ts">
    import { createApp, setAppContext, App, Text } from "pixi-svelte";
    const context = createApp();
    setAppContext(context);
</script>

<App> 
    <Text value="Hello world!" style={{ fill: 0xff1010 }} />
</App>
```

### Graphics
```ts
<script lang="ts">
    import { createApp, setAppContext, App, Graphics } from "pixi-svelte";
    const context = createApp();
    setAppContext(context);
</script>

<App>
    <Graphics
    	draw={(graphics) => {
    		graphics.beginFill(0xde3249);
    		graphics.drawRect(0, 0, 150, 150);
    		graphics.endFill();
    	}}
    />
    
</App>
```

### Rectangle
```ts
<script lang="ts">
    import { createApp, setAppContext, App, Rectangle } from "pixi-svelte";
    const context = createApp();
    setAppContext(context);
</script>

<App>
    <Rectangle
    	width={100}
    	height={100}
    	alpha={1}
    	borderWidth={2}
    	backgroundColor={0x522000}
    	borderColor={0x1dc000}
    	borderRadius={0.5}
    	x={50}
    	y={50}
    	zIndex={1}
    	isMask={false}
    />
</App>
```

### Storybook
Check out the storybook repo for pixi-svelte for more information: https://github.com/qk0106/pixi-svelte-storybook

## SSR
"window" is required for this package, so if SvelteKit is used, there are some options to make it work:

- Turn off SSR 
```ts
// src/routes/+page.ts
export const ssr = false;
```

- Dynamic import
```ts
<script lang="ts">
    import { browser } from "$app/environment";
    let component = undefined;

    $: if(browser) {
        import("./PixiSvelteApp.svelte").then(data => {
        component = data.default
        });
    }
</script>

{#if browser && component}
    <svelte:component this={component} />
{/if}
```

## Reference
- Pixi Text: https://pixijs.download/dev/docs/PIXI.Text.html
- Pixi Graphics Example: https://pixijs.io/examples-v4/#/graphics/simple.js
- SvelteKit SSR: https://kit.svelte.dev/docs/page-options#ssr
- Create a SvelteKit app: https://kit.svelte.dev/docs/creating-a-project

## Documentation
WIP...