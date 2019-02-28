// This config was generated using a preset.
// Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/vuejs.md#vuejs
module.exports = function(config) {
  config.set({
    mutate: ["my-name.vue"],
    mutator: "vue",
    testRunner: "command",
    commandRunner: { command: 'npm run mocha' },
    testFramework: 'mocha',
    mochaOptions: {
      files: ['dist/test.bundle.js']
    },
    transpilers: ['webpack'],
    webpack: {
      configFile: 'webpack.test.config.js'
    },
    reporters: ["progress", "clear-text", "html"],
    coverageAnalysis: "off"
  });
};
