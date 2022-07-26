module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
            '.json',
          ],
          alias: {
            '@/components': './src/components',
            '@/screens': './src/screens',
            '@/routes': './src/routes',
            '@/styles': './src/styles',
            '@/hooks': './src/hooks',
            '@/utils': './src/utils',
            '@/constants': './src/constants'
          },
        },
      ],
    ],
  };
};