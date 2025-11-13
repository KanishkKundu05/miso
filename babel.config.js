module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for react-native-reanimated (which @gorhom/bottom-sheet depends on)
      'react-native-reanimated/plugin',
    ],
  };
};

