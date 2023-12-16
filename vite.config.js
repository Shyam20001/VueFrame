import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'; // Import the 'path' module

// Merge the two configurations
const viteConfig = defineConfig({
  plugins: [vue()],
});

// Add the alias configuration
viteConfig.resolve = viteConfig.resolve || {};
viteConfig.resolve.alias = {
  ...viteConfig.resolve.alias,
  '@': path.resolve(__dirname, 'src'), // Adjust this path as needed
};

export default viteConfig;
