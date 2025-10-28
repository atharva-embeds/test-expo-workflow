const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Exclude unused assets from bundling
config.resolver.blockList = [
  /unused_assets\/.*/,
  ...(config.resolver.blockList || []),
];

module.exports = withNativeWind(config, { input: "./global.css" });
