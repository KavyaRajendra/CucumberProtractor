exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  resultJsonOutputFile: 'report.json',

  specs: [
    'features/*.feature'
  ],
  allScriptsTimeout: 20000,
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    format: 'pretty'
  }
}
