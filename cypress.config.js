const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    supportFile: false,
    specPattern: 'cypress/component/**/*.spec.js', // se estiver usando component testing
  },

  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/integration/**/*.spec.js',
  },
});
