import { createAsset } from 'pixi-svelte';

import img from './transition_char.png';
import rawAtlas from './transition_char.atlas?raw';
import spine from './transition_char.json';

export default createAsset({ img, rawAtlas, spine });
