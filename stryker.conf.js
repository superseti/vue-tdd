// This config was generated using a preset.
// Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/vuejs.md#vuejs
module.exports = function(config) {
  config.set({
    files: ["my-name.vue", "test/setup.js", "test/my-name.spec.js"],
    mutate: ["my-name.vue"],
    mutator: "vue",
    testRunner: "mocha",
    testFramework: 'mocha',
    transpilers: ['webpack'],
    plugins: ['css-loader', 'expect', 'jsdom', 'jsdom-global', 'mocha', 'mocha-webpack', 'stryker', 'stryker-html-reporter', 'stryker-mocha-runner', 'stryker-vue-mutator', 'stryker-webpack-transpiler',
        'vue-loader', 'vue-style-loader', 'vue-template-compiler', 'webpack' ],
    mochaOptions: {
      files: ['dist/test.bundle.js'],
      ui: 'bdd',
      opts: 'test/mocha.opts'
    },
    webpack: {
      configFile: 'webpack.test.config.js'
    },
    reporters: ["progress", "clear-text"],
    coverageAnalysis: "off"
  });
};
