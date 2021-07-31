const path = require('path');
// const StylelintPlugin = require('stylelint-webpack-plugin');

// const pathToInlineSvg = path.resolve(__dirname, '../src/img/icon');

console.log(path.resolve(__dirname, 'src/styles'));

module.exports = ({ config }) => {
  // a bunch of other rules here

  config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules'];

  // Alternately, for an alias:
  config.resolve.alias = {
    ...config.resolve?.alias,
    '@': path.resolve(__dirname, '..', 'src'),
    '@.storybook': path.resolve(__dirname, '..', '.storybook'),
    '@components': path.resolve(__dirname, '../src/presentation/components'),
    '@common': path.resolve(__dirname, '../src/presentation/common'),
    '@styles': path.resolve(__dirname, '../src/styles'),
  };

  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i,
    use: [
      'style-loader',
      {
        loader: 'css-loader', // Translates CSS into CommonJS
        options: {
          esModule: true,
        },
      },
      'postcss-loader',
      'resolve-url-loader',
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../'),
    sideEffects: true,
  });

  config.module.rules.push({
    test: /\.module\.s[ac]ss$/i,
    use: [
      'style-loader',
      {
        loader: 'css-loader', // Translates CSS into CommonJS
        options: {
          esModule: true,
          modules: {
            localIdentName: '[local]__[hash:base64:5]',
          },
        },
      },
      'postcss-loader',
      'resolve-url-loader',
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../'),
  });

  // const rules = config.module.rules;
  // const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
  // fileLoaderRule.exclude = pathToInlineSvg;

  // config.module.rules.push({
  //   test: /\.svg$/,
  //   include: pathToInlineSvg,
  //   use: [{ loader: '@svgr/webpack', options: { icon: true } }],
  // });

  // config.plugins.push(
  //   new StylelintPlugin({
  //     configFile: 'stylelint.config.js',
  //     context: 'src',
  //     files: '**/*.scss',
  //     failOnError: false,
  //     quiet: false,
  //   })
  // );

  return config;
};
