const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a96huw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
