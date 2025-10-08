import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";

// Import your GIF
const gifSource = require("../assets/clouds.gif");

export default function SplashScreen() {
  const { width: screenWidth } = useWindowDimensions();

  const horizontalPadding = 48 * 2; // px-12 left + right
  const availableWidth = Math.max(0, screenWidth - horizontalPadding);
  const maxWidth = 350;
  const gifWidth = Math.min(maxWidth, availableWidth);
  const gifHeight = Math.round((gifWidth * 275) / 350); // keep aspect ratio

  return (
    <View className="flex-1 font-mono items-center justify-center px-12">
      <Image
        source={gifSource}
        style={{ width: gifWidth, height: gifHeight, resizeMode: "contain" }}
      />

      <Text className="mt-5 mb-5 font-mono text-2xl font-bold text-neutral-500 text-center">
        Solar Plant Monitoring
      </Text>
    </View>
  );
}
