import { useVideoPlayer, VideoView } from "expo-video";
import { View, Text, useWindowDimensions, Image, Animated } from "react-native";
import { useEffect, useRef } from "react";
import Svg, { Circle, Path, Defs, LinearGradient, Stop, G } from "react-native-svg";

const videoSource = require("../assets/solar-panel (1).mp4");
const companyLogo = require("../assets/main.png");
const weatherGif = require("../assets/weather.gif");

export default function SplashScreen() {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  // px-12 on the container adds 48px padding on each side, so available width is screenWidth - 96
  const horizontalPadding = 48 * 2; // left + right
  const availableWidth = Math.max(0, screenWidth - horizontalPadding);
  const maxVideoWidth = 350;
  const videoWidth = Math.min(maxVideoWidth, availableWidth);
  // preserve original aspect ratio (275 / 350)
  const videoHeight = Math.round((videoWidth * 275) / 350);

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titlePosition = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    // Sequence of animations
    Animated.sequence([
      // Fade in and scale up the video
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]),
      // Then animate the title
      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(titlePosition, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <View className="flex-1 font-mono items-center justify-center px-12">
      {/* Background SVG */}
      <Svg
        height={screenHeight}
        width={screenWidth}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -10,
        }}
      >
        <Defs>
          <LinearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#60A5FA" stopOpacity="0.15" />
            <Stop offset="1" stopColor="#93C5FD" stopOpacity="0.05" />
          </LinearGradient>
        </Defs>

        {/* Sky Wave */}
        <Path
          d={`M 0 0 Q ${screenWidth / 2} 200, ${screenWidth} 0 L ${screenWidth} 300 L 0 300 Z`}
          fill="url(#skyGradient)"
        />

        {/* Abstract Solar Panel Pattern (bottom) */}
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
      </Svg>

      {/* Company Logo */}
      <Image
        source={companyLogo}
        style={{
          width: 180,
          height: 50,
          resizeMode: "contain",
          position: "absolute",
          top: 50,
          left: 20,
        }}
      />

      {/* Weather animation */}
      <Image
        source={weatherGif}
        style={{
          width: 80,
          height: 80,
          position: "absolute",
          top: 40,
          right: 20,
        }}
      />

      {/* Animated Video Container */}
      <Animated.View 
        style={{ 
          width: videoWidth, 
          height: videoHeight,
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 8,
          borderRadius: 12,
          overflow: 'hidden'
        }}
      >
        <VideoView
          style={{
            width: videoWidth,
            height: videoHeight,
            borderRadius: 12,
          }}
          player={player}
          nativeControls={false}
          allowsPictureInPicture={false}
        />
      </Animated.View>

      {/* Animated Title */}
      <Animated.Text 
        style={{
          fontFamily: 'monospace',
          fontSize: 24,
          fontWeight: 'bold',
          color: '#1F2937',
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 5,
          opacity: titleOpacity,
          transform: [{ translateY: titlePosition }]
        }}
      >
        Solar Plant Monitoring
      </Animated.Text>
      
      <Animated.Text
        style={{
          fontFamily: 'monospace',
          fontSize: 14,
          color: '#4B5563',
          textAlign: 'center',
          opacity: titleOpacity,
          transform: [{ translateY: titlePosition }]
        }}
      >
        Real-time energy production tracking
      </Animated.Text>
    </View>
  );
}
