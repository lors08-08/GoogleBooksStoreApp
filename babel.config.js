const isDevServer = process.env.WEBPACK_DEV_SERVER;

module.exports = {
  presets: [
    [
      '@babel/preset-env'
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    ['@babel/preset-typescript'],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',

    ['@babel/plugin-transform-typescript', { isTSX: true }],

    'babel-plugin-styled-components'
  ],
};
