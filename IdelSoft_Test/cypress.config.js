
const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://magento.softwaretestingboard.com',
        setupNodeEvents(on, config) {
            on('task', {
                log(message) {
                    console.log(message);
                    return null;
                },
            });
        },
        retries: {
            runMode: 2,
            openMode: 0,
        },
    },
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
});
