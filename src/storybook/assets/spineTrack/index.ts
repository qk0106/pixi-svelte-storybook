import { createAsset } from 'pixi-svelte';

import img from './feature_background.webp';
import rawAtlas from './feature_background.atlas?raw';
import spine from './feature_background.json';

export default createAsset({ img, rawAtlas, spine });