import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

const appName = 'Laravel';
createInertiaApp({
	title: (title) => `${title}`,
	resolve: (name) => {
		const page = require(`./Pages/${name}`).default
		return page
	},
	setup({ el, App, props }) {
		const root = createRoot(el);
		root.render(<App {...props} />);
	},
	progress: {
		color: '#4B5563',
	},
})
