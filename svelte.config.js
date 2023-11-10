import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import adapter from '@sveltejs/adapter-auto';

export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [autoprefixer()],
		},
		babel: {
			presets: [
				[
					'@babel/preset-env',
					{
						loose: true,
						// No need for babel to resolve modules
						modules: false,
						targets: {
							// ! Very important. Target es6+
							esmodules: true,
						},
					},
				],
			],
		},
	}),
	kit: {
		// config.kit.adapter default
		// adapter: undefined,
		adapter: adapter(),

		// config.kit.files default
		// files: {
		//   assets: 'static',
		//   hooks: {
		//     client: 'src/hooks.client',
		//     server: 'src/hooks.server'
		//   },
		//   lib: 'src/lib',
		//   params: 'src/params',
		//   routes: 'src/routes',
		//   serviceWorker: 'src/service-worker',
		//   appTemplate: 'src/app.html',
		//   errorTemplate: 'src/error.html'
		// },

		// config.kit.env default
		// env: {
		//   dir: process.cwd(),
		//   publicPrefix: 'PUBLIC_'
		// },
	}
};
