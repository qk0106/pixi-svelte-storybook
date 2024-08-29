<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';

	import { Graphics, Container } from 'pixi-svelte';
</script>

<Meta
	title="pixi-svelte/Graphics"
	component={Graphics}
	argTypes={{
		x: { name: 'x', control: { type: 'number' } },
		y: { name: 'y', control: { type: 'number' } },
		zIndex: { name: 'zIndex', control: { type: 'number' } },
		isMask: { name: 'isMask', control: { type: 'boolean' } },
		pivot: { name: 'pivot', control: { type: 'object' } },
	}}
	args={{
		x: 50,
		y: 50,
		zIndex: 1,
		isMask: false,
		pivot: { x: 0, y: 0 },
	}}
/>

<Story let:args name="Preview" >
	<StoryPixi>
		<Container>
			<Graphics
				{...args}
				draw={(graphics) => {
					graphics.beginFill(0xde3249);
					graphics.drawRect(args.x, args.y, 150, 150);
					graphics.endFill();
				}}
			/>

			<Graphics
				draw={(graphics) => {
					graphics.lineStyle(2, 0xfeeb77, 1);
					graphics.beginFill(0x650a5a, 1);
					graphics.drawCircle(250, 250, 50);
					graphics.endFill();
				}}
			/>
	
			<Graphics
				draw={(graphics) => {
					graphics.lineStyle(2, 0xfeeb77, 1);
					graphics.beginFill(0x650a5a);
					graphics.drawRect(200, 50, 100, 100);
					graphics.endFill();
				}}
			/>
	
			<Graphics
				draw={(graphics) => {
					graphics.lineStyle(10, 0xffbd01, 1);
					graphics.beginFill(0xc34288);
					graphics.drawRect(350, 50, 100, 100);
					graphics.endFill();
				}}
			/>

			<Graphics
				draw={(graphics) => {
					graphics.lineStyle(10, 0xffbd01, 1);
					graphics.beginFill(0xc34288, 1);
					graphics.drawCircle(400, 250, 50);
					graphics.endFill();
				}}
			/>
		</Container>

		<Graphics
			draw={(graphics) => {
				graphics.lineStyle(2, 0xffffff, 1);
				graphics.beginFill(0xaa4f08);
				graphics.drawRect(530, 50, 140, 100);
				graphics.endFill();
			}}
		/>

		<Graphics
			draw={(graphics) => {
				graphics.lineStyle(0);
			}}
		/>

		<Graphics
			draw={(graphics) => {
				graphics.lineStyle(2, 0xffffff, 1);
				graphics.beginFill(0xaa4f08, 1);
				graphics.drawEllipse(600, 250, 80, 50);
				graphics.endFill();
			}}
		/>

		<Graphics
			draw={(graphics) => {
				graphics.lineStyle(4, 0xffd900, 1);
				graphics.moveTo(50, 350);
				graphics.lineTo(250, 350);
				graphics.lineTo(100, 400);
				graphics.lineTo(50, 350);
				graphics.closePath();
				graphics.endFill();
			}}
		/>

		<Graphics
			draw={(graphics) => {
				graphics.lineStyle(2, 0xff00ff, 1);
				graphics.beginFill(0x650a5a, 0.25);
				graphics.drawRoundedRect(50, 440, 100, 100, 16);
				graphics.endFill();
			}}
		/>

		<Graphics
			draw={(graphics) => {
				const path = [600, 370, 700, 460, 780, 420, 730, 570, 590, 520];
				graphics.lineStyle(0);
				graphics.beginFill(0x3500fa, 1);
				graphics.drawPolygon(path);
				graphics.endFill();
			}}
		/>
	</StoryPixi>
</Story>
