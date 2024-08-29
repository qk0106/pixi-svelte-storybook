import { addons } from '@storybook/preview-api';
import customTheme from './CustomTheme';

addons.setConfig({
	theme: customTheme,
});
