const CopyWebpackPlugin = require('copy-webpack-plugin');
const Path = require('path');
const BaseConfig = require('./base.config');

const generateI18nStrings = (i18n) => {
  return Object.keys(i18n).reduce((acc, val) => {
    if (!Object.keys(i18n[val]).includes('default')) {
      return Object.assign(acc, generateI18nStrings(i18n[val]));
    }
    const value = Object.keys(i18n[val]).includes('webapp') ? i18n[val].webapp : i18n[val].default; // /////////////////////
    acc[`${i18n[val].key}`] = value;
    return acc;
  }, {});
};

module.exports = Object.assign(BaseConfig, {
  entry: {
    app: Path.resolve(__dirname, '../src/modules/webapp/webapp-app/webapp-app.module.ts')
  },
  output: {
    path: Path.resolve(__dirname, '../build/webapp/assets')
  },
  plugins: BaseConfig.plugins.concat([
    new CopyWebpackPlugin({
      patterns: [
        {
          from: Path.resolve(__dirname, '../res/strings'),
          to: './assets/strings_[name].json',
          toType: 'template',
          transform(buffer) {
            const i18n = JSON.parse(buffer.toString()); //
            const messages = generateI18nStrings(i18n);
            return JSON.stringify(messages, null, 2);
          }
        },
        {
          from: Path.resolve(__dirname, '../res/webext/images') //
        },
        {
          from: Path.resolve(__dirname, '../res/webext/manifest.json'), //
          to: '../manifest.json'
        },
        {
          from: Path.resolve(__dirname, '../res/webapp'),
          to: '../'
        }
      ]
    })
  ])
});
