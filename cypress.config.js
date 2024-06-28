const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 90000,
  pageLoadTimeout: 80000,
  watchForFileChanges: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const baseUrl =
      config.env.APP_ENV === "production"
        ? "https://wakanow.revamp.azurewebsites.net"
        : "https://wakanow-b2b-new-portal-revamp.azurewebsites.net/auth/signin";
     

    config.baseUrl = baseUrl;

    return config;
    },
  },
});
