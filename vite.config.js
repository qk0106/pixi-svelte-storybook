import babel from 'vite-babel-plugin';
import { sveltekit } from '@sveltejs/kit/vite';
import macrosPlugin from 'vite-plugin-babel-macros';

const NODE_ENV = process.env.NODE_ENV;

let dev = NODE_ENV === 'development';

/** @type {import('vite').UserConfig} */
const config = () => ({
	logLevel: 'info',
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['./'],
		},
		// maxSessionMemory: 1000,
	},

	build: {
		sourcemap: dev,
		output: {
			sourcemap: true,
			rollupOptions: {
				// banner: "'use strict';\n\nrequire('source-map-support').install();",
			},
		},
	},
	optimizeDeps: {
		exclude: ['fsevents'],
	},
	plugins: [sveltekit(), babel.default(), macrosPlugin()],
});

export default config();
