({
  appDir: './app',
  baseUrl: './js',
  dir: './dist-optimized/hmhApp',
  findNestedDependencies: false,
  modules: [{
    name: 'main'
  }],
  fileExclusionRegExp: /lib/,
  optimize: 'uglify2',
  uglify2: {
    mangle: false // AngularJS does not work with name mangling
  },
  optimizeCss: 'standard',
  removeCombined: true,
  paths: {
    angular: 'empty:',
    angularRoute: 'empty:',
    angularAnimate: 'empty:'
  },
  shim: {}
})