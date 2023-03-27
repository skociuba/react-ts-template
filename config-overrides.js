const CopyModulesPlugin = require('copy-modules-webpack-plugin');

module.exports = function override(config, env) {
  const addSonatypeiqRoutines = [
    new CopyModulesPlugin({
      destination: 'sonatypeiq',
      includePackageJsons: true,
    }),
  ];
  config = {
    ...config,
    plugins: [...config.plugins, ...addSonatypeiqRoutines],
  };
  return config;
};
