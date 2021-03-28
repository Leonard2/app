const CopyWebpackPlugin = require('copy-webpack-plugin');
const Path = require('path');
const BaseConfig = require('./base.config');

module.exports = Object.assign(BaseConfig, {
  entry: {
    app: Path.resolve(__dirname, '../src/webapp/app/webapp-app.module.ts')
  },
  output: {
    path: Path.resolve(__dirname, '../build/webapp/assets')
  },
 plugins: BaseConfig.plugins.concat([
    new CopyWebpackPlugin({
      patterns: [
        {
          from: Path.resolve(__dirname, '../../res/strings'),
          to: '../_locales/[name]/messages.json',
          toType: 'template',
          transform(buffer) {
            const i18n = JSON.parse(buffer.toString());//
            const messages = i18n;
            return JSON.stringify(messages, null, 2);
          }
        },
        {
          from: Path.resolve(__dirname, '../../res/webext/images')//
        },
        {
          from: Path.resolve(__dirname, '../res/webext/manifest.json'),//
          to: '../manifest.json'
        },
		{
          from: Path.resolve(__dirname, '../res/webapp'),
          to: '../'
        }
      ]
    }),
  ])
});
