import {
  View,
  useWindowDimensions,
  Image,
  Animated,
  Easing,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Rect,
} from "react-native-svg";

const companyLogo = require("../assets/main.png");
const splashImage = require("../assets/download.png");

export default function Splash() {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const horizontalPadding = 48 * 2;
  const availableWidth = Math.max(0, screenWidth - horizontalPadding);
  const maxImageWidth = 350;
  const imageWidth = Math.min(maxImageWidth, availableWidth);
  const imageHeight = Math.round((imageWidth * 275) / 350);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titlePosition = useRef(new Animated.Value(20)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const sunRotation = useRef(new Animated.Value(0)).current;
  const progressWidth = useRef(new Animated.Value(0)).current;
  const [imageLoaded, setImageLoaded] = useState(false);

  const spin = sunRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    if (!imageLoaded) return;

    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.elastic(1),
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1200,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          useNativeDriver: true,
        }),
      ]),
      Animated.stagger(200, [
        Animated.parallel([
          Animated.timing(titleOpacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(titlePosition, {
            toValue: 0,
            duration: 800,
            easing: Easing.out(Easing.back(1.5)),
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(subtitleOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(progressWidth, {
          toValue: 1,
          duration: 2000,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          useNativeDriver: false,
        }),
      ]),
    ]).start(() => {
      Animated.loop(
        Animated.timing(sunRotation, {
          toValue: 1,
          duration: 10000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    });
  }, [imageLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View className="flex-1 font-mono items-center justify-center px-12">
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
            <Stop offset="0" stopColor="#F59E0B" stopOpacity="0.15" />
            <Stop offset="0.3" stopColor="#FCD34D" stopOpacity="0.1" />
            <Stop offset="0.7" stopColor="#60A5FA" stopOpacity="0.08" />
            <Stop offset="1" stopColor="#93C5FD" stopOpacity="0.05" />
          </LinearGradient>
          <LinearGradient id="sunGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FDB813" stopOpacity="0.4" />
            <Stop offset="0.5" stopColor="#F59E0B" stopOpacity="0.3" />
            <Stop offset="1" stopColor="#FBBF24" stopOpacity="0.15" />
          </LinearGradient>
        </Defs>

        <Rect
          x="0"
          y="0"
          width={screenWidth}
          height={screenHeight}
          fill="url(#skyGradient)"
        />

        <Circle cx={screenWidth - 60} cy={80} r={40} fill="url(#sunGradient)" />

        <Path
          d={`M 0 0 Q ${screenWidth / 2} 200, ${screenWidth} 0 L ${screenWidth} 300 L 0 300 Z`}
          fill="#FCD34D"
          opacity="0.08"
        />

        <Path
          d={`M 0 ${screenHeight - 100} Q ${screenWidth / 4} ${screenHeight - 120}, ${screenWidth / 2} ${screenHeight - 100} T ${screenWidth} ${screenHeight - 100} L ${screenWidth} ${screenHeight} L 0 ${screenHeight} Z`}
          fill="#F59E0B"
          opacity="0.06"
        />
        <Path
          d={`M 0 ${screenHeight - 60} Q ${screenWidth / 3} ${screenHeight - 90}, ${(screenWidth * 2) / 3} ${screenHeight - 60} T ${screenWidth} ${screenHeight - 70} L ${screenWidth} ${screenHeight} L 0 ${screenHeight} Z`}
          fill="#FCD34D"
          opacity="0.04"
        />
      </Svg>

      <Animated.View
        style={{
          position: "absolute",
          top: 40,
          right: 20,
          transform: [{ rotate: spin }],
          zIndex: -5,
        }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "rgba(251, 191, 36, 0.2)",
            }}
          />
        </View>
      </Animated.View>

      <Animated.View
        style={{
          position: "absolute",
          top: 50,
          left: 20,
          opacity: logoOpacity,
          transform: [{ scale: logoScale }],
        }}
      >
        <Image
          source={companyLogo}
          style={{
            width: 180,
            height: 50,
            resizeMode: "contain",
          }}
        />
      </Animated.View>

      <Animated.View
        style={{
          width: imageWidth,
          height: imageHeight,
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        }}
      >
        <Image
          source={splashImage}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
            backgroundColor: "transparent",
          }}
          onLoad={() => setImageLoaded(true)}
        />
      </Animated.View>

      <Animated.Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: "#1F2937",
          textAlign: "center",
          marginTop: 24,
          marginBottom: 8,
          opacity: titleOpacity,
          transform: [{ translateY: titlePosition }],
          textShadowColor: "rgba(0, 0, 0, 0.1)",
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 2,
        }}
      >
        Solar Plant Monitoring
      </Animated.Text>

      <View
        style={{
          width: Math.min(280, availableWidth),
          height: 4,
          backgroundColor: "rgba(245, 158, 11, 0.2)",
          borderRadius: 2,
          marginTop: 32,
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={{
            height: "100%",
            backgroundColor: "#F59E0B",
            borderRadius: 2,
            width: progressWidth.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"],
            }),
          }}
        />
      </View>
    </View>
  );
}
