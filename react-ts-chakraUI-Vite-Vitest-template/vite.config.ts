/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// more config https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib

export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './__Tests/setupTests.ts',
		coverage: {
			reporter: ['text', 'json', 'html'],
		},
	},
});
