module.exports = {
  presets: [
    [
      '@vue/app',
      {
        modules: false,
        polyfills: ['es6.promise', 'es6.symbol'],
        useBuiltIns: 'entry'
      }
    ],
    ['@vue/cli-plugin-babel/preset']
  ]
}
