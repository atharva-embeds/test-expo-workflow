import { View, Text, useWindowDimensions, Image } from "react-native";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  G,
} from "react-native-svg";

const solarGif = require("../assets/solar-panel(1).gif");
const companyLogo = require("../assets/main.png");

export default function SplashScreen() {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const horizontalPadding = 48 * 2;
  const availableWidth = Math.max(0, screenWidth - horizontalPadding);
  const maxWidth = 350;
  const gifWidth = Math.min(maxWidth, availableWidth);
  const gifHeight = Math.round((gifWidth * 275) / 350);

  return (
    <View className="flex-1 items-center justify-center px-12">
      {/* ===== Background (Always Behind) ===== */}
      <Svg
        height={screenHeight}
        width={screenWidth}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -10,
          pointerEvents: "none", // don't intercept touches
        }}
      >
        <Defs>
          <LinearGradient id="sunGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FDB813" stopOpacity="0.2" />
            <Stop offset="1" stopColor="#FBBF24" stopOpacity="0.1" />
          </LinearGradient>
          <LinearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#60A5FA" stopOpacity="0.15" />
            <Stop offset="1" stopColor="#93C5FD" stopOpacity="0.05" />
          </LinearGradient>
        </Defs>

        {/* Sun and Rays */}
        <G opacity="0.25">
          <Circle
            cx={screenWidth - 40}
            cy="80"
            r="60"
            fill="url(#sunGradient)"
          />
          <Circle
            cx={screenWidth - 40}
            cy="80"
            r="40"
            fill="#FDB813"
            opacity="0.15"
          />
          <Path
            d={`M ${screenWidth - 50} 100 L ${screenWidth - 100} 50 L ${screenWidth - 80} 120 Z`}
            fill="#FDB813"
          />
          <Path
            d={`M ${screenWidth - 30} 150 L ${screenWidth - 90} 100 L ${screenWidth - 60} 180 Z`}
            fill="#FBBF24"
          />
        </G>

        {/* Sky Wave */}
        <Path
          d={`M 0 0 Q ${screenWidth / 2} 200, ${screenWidth} 0 L ${screenWidth} 300 L 0 300 Z`}
          fill="url(#skyGradient)"
        />

        {/* Abstract Solar Panel Pattern (bottom-left) */}
        <G opacity="0.08">
          <Path
            d={`M 30 ${screenHeight - 120} L 80 ${screenHeight - 120} L 80 ${screenHeight - 80} L 30 ${screenHeight - 80} Z`}
            fill="#3B82F6"
          />
          <Path
            d={`M 90 ${screenHeight - 110} L 130 ${screenHeight - 110} L 130 ${screenHeight - 75} L 90 ${screenHeight - 75} Z`}
            fill="#2563EB"
          />
          <Path
            d={`M 45 ${screenHeight - 160} L 115 ${screenHeight - 160} L 115 ${screenHeight - 125} L 45 ${screenHeight - 125} Z`}
            fill="#60A5FA"
          />
        </G>


        {/* Bottom Waves */}
        <Path
          d={`M 0 ${screenHeight - 100} Q ${screenWidth / 4} ${screenHeight - 120}, ${screenWidth / 2} ${screenHeight - 100} T ${screenWidth} ${screenHeight - 100} L ${screenWidth} ${screenHeight} L 0 ${screenHeight} Z`}
          fill="#60A5FA"
          opacity="0.05"
        />
        <Path
          d={`M 0 ${screenHeight - 60} Q ${screenWidth / 4} ${screenHeight - 75}, ${screenWidth / 2} ${screenHeight - 60} T ${screenWidth} ${screenHeight - 60} L ${screenWidth} ${screenHeight} L 0 ${screenHeight} Z`}
          fill="#93C5FD"
          opacity="0.08"
        />
      </Svg>

      {/* ===== Company Logo (Below GIF) ===== */}
      <Image
        source={companyLogo}
        style={{
          width: 180,
          height: 50,
          resizeMode: "contain",
          position: "absolute",
          top: 50,
          left: 20,
          zIndex: 1,
        }}
      />

      {/* ===== Solar GIF (Always on Top) ===== */}
      <View
        style={{
          position: "absolute",
          top: screenHeight / 2 - gifHeight / 1.5,
          zIndex: 999, // ensure highest layer
          elevation: 999, // for Android
          pointerEvents: "none", // ignore touches
        }}
      >
        <Image
          source={solarGif}
          style={{
            width: gifWidth,
            height: gifHeight * 1.2,
            transform: [{ rotateX: "15deg" }], // depth
          }}
        />
      </View>

      {/* ===== Text (Below GIF) ===== */}
      <Text
        className=" mb-2 font-mono text-3xl font-bold text-neutral-700 text-center"
        style={{
          zIndex: 1,
          marginTop: screenHeight / 2.8,
        }}
      >
        Solar Plant Monitoring
      </Text>
    </View>
  );
}
