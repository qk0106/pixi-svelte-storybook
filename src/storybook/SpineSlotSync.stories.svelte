<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';

	import {
		SpineProvider,
		SpineEventEmitterProvider,
		SpineTrack,
		Sprite,
		SpineSlot,
	} from 'pixi-svelte';

	const assets = {
		spineSlotSync: {
			type: 'spine',
			src: {
				skeleton:
					'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/spine-slot-sync-attachment/slot-sync-attachment.json',
				atlas: 'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/spine-slot-sync-attachment/slot-sync-attachment.atlas',
			},
		},
		sprites: {
			type: 'sprites',
			src: 'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/sprites/sprites.json',
		},
	} as const;
</script>

<Meta
	title="pixi-svelte/Spine/SpineSlotSync"
	component={SpineProvider}
	argTypes={{
		width: { name: 'width', control: { type: 'number' } },
		height: { name: 'height', control: { type: 'number' } },
		x: { name: 'x', control: { type: 'number' } },
		y: { name: 'y', control: { type: 'number' } },
		zIndex: { name: 'zIndex', control: { type: 'number' } },
		play: { name: 'play', control: { type: 'boolean' } },
		timeScale: { name: 'timeScale', control: { type: 'number' } },
		anchor: { name: 'anchor', control: { type: 'object' } },
	}}
	args={{
		width: 250,
		x: 300,
		y: 100,
		zIndex: 1,
		play: true,
		timeScale: 1,
		anchor: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview">
	<StoryPixi {assets}>
		<SpineProvider loop {...args} key="spineSlotSync">
			<SpineTrack index={0} track="attachmentOnOff" loop />
			<SpineEventEmitterProvider>
				<SpineSlot slotName="slot_sync">
					<Sprite key="logo.png" width={500} height={500} />
				</SpineSlot>
				<SpineSlot slotName="slot_sync2">
					<Sprite key="logo.png" width={500} height={500} />
				</SpineSlot>
			</SpineEventEmitterProvider>
			<!-- <SpineSlot slotName="slot_sync">
				<Sprite key="logo.png" width={500} height={500} />
			</SpineSlot>
			<SpineSlot slotName="slot_sync2">
				<Sprite key="logo.png" width={500} height={500} />
			</SpineSlot> -->
		</SpineProvider>
		<Sprite x={args.x + args.width} key="logo.png" width={500} height={500} />
	</StoryPixi>
</Story>
