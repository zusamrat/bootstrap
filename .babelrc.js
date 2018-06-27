const babelConfig = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
        exclude: ['transform-typeof-symbol']
      }
    ]
  ],
  plugins: [
    '@babel/proposal-object-rest-spread'
  ],
  env: {
    test: {
      plugins: [ 'istanbul' ]
    }
  }
};

if (process.env.PLUGINS) {
  /**
   * Convert plugin path to the plugin name
   *
   * Example: js/src/alert --> Alert
   *
   * @param test Path to the plugin
   */
  babelConfig.getModuleId = (test) => {
    const explodeModuleId = test.split('/')
    const moduleId = explodeModuleId[explodeModuleId.length - 1]
    return moduleId.charAt(0).toUpperCase() + moduleId.slice(1)
  }
  babelConfig.moduleId = 'bs'

  babelConfig.plugins.push(['transform-es2015-modules-umd', {
    globals: {
      jquery: 'jQuery',
      'popper.js': 'Popper',
      './util': 'Util',
      './tooltip': 'Tooltip'
    },
    exactGlobals: true
  }])
}

module.exports = babelConfig;
