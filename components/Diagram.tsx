import React, { useEffect, useRef } from "react";
import { View, ScrollView, useWindowDimensions, Animated } from "react-native";
import Svg, {
  Circle,
  Path,
  Rect,
  Text as SvgText,
  Line,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from "react-native-svg";

interface SolarDiagramProps {
  width: number;
  height: number;
}

const SolarDiagram: React.FC<SolarDiagramProps> = ({ width, height }) => {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    );
    pulse.start();

    return () => pulse.stop();
  }, [pulseAnim]);

  return (
    <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 350 300"
        className="shadow-2xl rounded-2xl"
      >
        <Defs>
          {/* Light Background Gradient */}
          <LinearGradient id="diagramBg" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FFFFFF" />
            <Stop offset="0.5" stopColor="#F8FAFC" />
            <Stop offset="1" stopColor="#F1F5F9" />
          </LinearGradient>

          {/* 3D Effect Gradients */}
          <LinearGradient id="towerGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#E5E7EB" />
            <Stop offset="0.5" stopColor="#D1D5DB" />
            <Stop offset="1" stopColor="#9CA3AF" />
          </LinearGradient>

          <LinearGradient id="inverterGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FED7AA" />
            <Stop offset="0.5" stopColor="#FDBA74" />
            <Stop offset="1" stopColor="#FB923C" />
          </LinearGradient>

          <LinearGradient id="panelGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#93C5FD" />
            <Stop offset="0.3" stopColor="#60A5FA" />
            <Stop offset="0.7" stopColor="#3B82F6" />
            <Stop offset="1" stopColor="#2563EB" />
          </LinearGradient>

          <LinearGradient id="monitorGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#DDD6FE" />
            <Stop offset="0.5" stopColor="#C4B5FD" />
            <Stop offset="1" stopColor="#A78BFA" />
          </LinearGradient>

          <LinearGradient id="cloudGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#E0F2FE" />
            <Stop offset="0.5" stopColor="#B3E5FC" />
            <Stop offset="1" stopColor="#81D4FA" />
          </LinearGradient>

          <LinearGradient id="computerGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#F3E8FF" />
            <Stop offset="0.5" stopColor="#E9D5FF" />
            <Stop offset="1" stopColor="#D8B4FE" />
          </LinearGradient>

          <LinearGradient id="phoneGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FCE7F3" />
            <Stop offset="0.5" stopColor="#FBCFE8" />
            <Stop offset="1" stopColor="#F9A8D4" />
          </LinearGradient>

          {/* Energy Flow Gradient */}
          <LinearGradient id="energyFlow" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#86EFAC" />
            <Stop offset="0.5" stopColor="#4ADE80" />
            <Stop offset="1" stopColor="#22C55E" />
          </LinearGradient>

          {/* Shadow Effects */}
          <RadialGradient id="shadowGradient" cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor="rgba(0,0,0,0.05)" />
            <Stop offset="1" stopColor="rgba(0,0,0,0)" />
          </RadialGradient>
        </Defs>

        {/* Enhanced Background */}
        <Rect
          x="0"
          y="0"
          width="350"
          height="300"
          fill="url(#diagramBg)"
          rx="16"
        />

        {/* Electric Tower */}
        <Rect
          x="20"
          y="80"
          width="20"
          height="140"
          fill="url(#towerGradient)"
          rx="4"
          stroke="#6B7280"
          strokeWidth="2"
        />
        <SvgText
          x="30"
          y="235"
          fontSize="12"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Electric Tower
        </SvgText>

        {/* Output Points A, B, C */}
        <Circle
          cx="45"
          cy="120"
          r="5"
          fill="#FFFFFF"
          stroke="#374151"
          strokeWidth="1"
        />
        <SvgText
          x="45"
          y="125"
          fontSize="8"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
        >
          A
        </SvgText>

        <Circle
          cx="45"
          cy="150"
          r="5"
          fill="#FFFFFF"
          stroke="#374151"
          strokeWidth="1"
        />
        <SvgText
          x="45"
          y="155"
          fontSize="8"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
        >
          B
        </SvgText>

        <Circle
          cx="45"
          cy="180"
          r="5"
          fill="#FFFFFF"
          stroke="#374151"
          strokeWidth="1"
        />
        <SvgText
          x="45"
          y="185"
          fontSize="8"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
        >
          C
        </SvgText>

        {/* Inverter */}
        <Rect
          x="90"
          y="130"
          width="40"
          height="40"
          fill="url(#inverterGradient)"
          rx="6"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <SvgText
          x="110"
          y="155"
          fontSize="10"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Inverter
        </SvgText>

        {/* Solar Panel above Inverter */}
        <Rect
          x="90"
          y="70"
          width="40"
          height="30"
          fill="url(#panelGradient)"
          rx="4"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        <SvgText
          x="110"
          y="105"
          fontSize="10"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Solar Panel
        </SvgText>

        {/* EMU below Inverter */}
        <Rect
          x="90"
          y="190"
          width="40"
          height="30"
          fill="url(#monitorGradient)"
          rx="4"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <SvgText
          x="110"
          y="225"
          fontSize="10"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          EMU
        </SvgText>

        {/* Cloud */}
        <Path
          d="M 185 130 Q 185 125 190 125 Q 195 125 200 130 Q 205 125 210 125 Q 215 125 215 130 Q 215 135 210 140 Q 205 145 200 145 Q 195 145 190 140 Q 185 145 180 145 Q 175 145 175 140 Q 175 135 180 130 Z"
          fill="url(#cloudGradient)"
          stroke="#81D4FA"
          strokeWidth="2"
        />
        <SvgText
          x="197.5"
          y="165"
          fontSize="10"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Cloud
        </SvgText>

        {/* Mobile */}
        <Rect
          x="265"
          y="105"
          width="15"
          height="30"
          fill="url(#phoneGradient)"
          rx="3"
          stroke="#EC4899"
          strokeWidth="2"
        />
        <Rect x="268" y="110" width="9" height="20" fill="#FFFFFF" rx="1" />
        <SvgText
          x="272.5"
          y="150"
          fontSize="10"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Mobile
        </SvgText>

        {/* Laptop */}
        <Rect
          x="265"
          y="155"
          width="30"
          height="20"
          fill="url(#computerGradient)"
          rx="3"
          stroke="#8B5CF6"
          strokeWidth="2"
        />
        <Rect x="270" y="160" width="20" height="10" fill="#FFFFFF" rx="1" />
        <SvgText
          x="280"
          y="185"
          fontSize="10"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Laptop
        </SvgText>

        {/* Arrow to Inverter */}
        <Line
          x1="25"
          y1="150"
          x2="45"
          y2="150"
          stroke="url(#energyFlow)"
          strokeWidth="3"
        />
        <Path d="M 45 145 L 50 150 L 45 155 Z" fill="url(#energyFlow)" />

        {/* Inverter */}
        <Rect
          x="55"
          y="135"
          width="30"
          height="30"
          fill="url(#inverterGradient)"
          rx="4"
        />
        {/* Lightning Icon */}
        <Path
          d="M 65 140 L 68 140 L 66 147 L 70 147 L 63 160 L 65 152 L 62 152 Z"
          fill="#FFFFFF"
        />
        <SvgText
          x="70"
          y="180"
          fontSize="10"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Inverter
        </SvgText>

        {/* Arrow to Solar Panels */}
        <Line
          x1="90"
          y1="150"
          x2="110"
          y2="150"
          stroke="url(#energyFlow)"
          strokeWidth="3"
        />
        <Path d="M 110 145 L 115 150 L 110 155 Z" fill="url(#energyFlow)" />

        {/* Solar Panels */}
        <Rect
          x="120"
          y="135"
          width="40"
          height="20"
          fill="url(#panelGradient)"
          rx="2"
        />
        <Rect
          x="122"
          y="137"
          width="36"
          height="4"
          fill="rgba(255,255,255,0.5)"
          rx="1"
        />
        <Line
          x1="120"
          y1="145"
          x2="160"
          y2="145"
          stroke="#2563EB"
          strokeWidth="1"
        />
        <Line
          x1="120"
          y1="150"
          x2="160"
          y2="150"
          stroke="#2563EB"
          strokeWidth="1"
        />
        <SvgText
          x="140"
          y="170"
          fontSize="10"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Solar Panels
        </SvgText>

        {/* Arrow to Monitoring Unit */}
        <Line
          x1="165"
          y1="150"
          x2="185"
          y2="150"
          stroke="url(#energyFlow)"
          strokeWidth="3"
        />
        <Path d="M 185 145 L 190 150 L 185 155 Z" fill="url(#energyFlow)" />

        {/* Monitoring Unit */}
        <Rect
          x="195"
          y="135"
          width="30"
          height="30"
          fill="url(#monitorGradient)"
          rx="4"
        />
        <Rect x="200" y="140" width="20" height="15" fill="#FFFFFF" rx="2" />
        <Rect x="202" y="142" width="16" height="2" fill="#A78BFA" rx="1" />
        <Rect x="202" y="146" width="12" height="2" fill="#C4B5FD" rx="1" />
        <Rect x="202" y="150" width="14" height="2" fill="#DDD6FE" rx="1" />
        <SvgText
          x="210"
          y="180"
          fontSize="10"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Monitor
        </SvgText>

        {/* Arrow to Cloud */}
        <Line
          x1="230"
          y1="150"
          x2="250"
          y2="150"
          stroke="url(#energyFlow)"
          strokeWidth="3"
        />
        <Path d="M 250 145 L 255 150 L 250 155 Z" fill="url(#energyFlow)" />

        {/* Cloud */}
        <Path
          d="M 265 125 Q 265 120 270 120 Q 275 120 280 125 Q 285 120 290 120 Q 295 120 295 125 Q 295 130 290 135 Q 285 140 280 140 Q 275 140 270 135 Q 265 140 260 140 Q 255 140 255 135 Q 255 130 260 125 Z"
          fill="url(#cloudGradient)"
        />
        <SvgText
          x="275"
          y="155"
          fontSize="10"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Cloud
        </SvgText>

        {/* Arrow to Devices */}
        <Line
          x1="295"
          y1="130"
          x2="315"
          y2="130"
          stroke="url(#energyFlow)"
          strokeWidth="3"
        />
        <Path d="M 315 125 L 320 130 L 315 135 Z" fill="url(#energyFlow)" />

        {/* Analytics Dashboard (Computer) */}
        <Rect
          x="270"
          y="160"
          width="25"
          height="15"
          fill="url(#computerGradient)"
          rx="2"
        />
        <Rect x="275" y="165" width="15" height="10" fill="#FFFFFF" rx="1" />
        <Rect x="277" y="167" width="11" height="1" fill="#D8B4FE" rx="0.5" />
        <Rect x="277" y="169" width="8" height="1" fill="#E9D5FF" rx="0.5" />
        <Rect x="277" y="171" width="9" height="1" fill="#F3E8FF" rx="0.5" />
        <SvgText
          x="282.5"
          y="185"
          fontSize="9"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Dashboard
        </SvgText>

        {/* Mobile App (Smartphone) */}
        <Rect
          x="305"
          y="155"
          width="12"
          height="25"
          fill="url(#phoneGradient)"
          rx="2"
        />
        <Rect x="307" y="160" width="8" height="15" fill="#FFFFFF" rx="1" />
        <Circle cx="311" cy="175" r="1" fill="#F9A8D4" />
        <SvgText
          x="311"
          y="190"
          fontSize="9"
          fill="#374151"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Mobile
        </SvgText>
      </Svg>
    </Animated.View>
  );
};

export default function Diagram() {
  const { width: screenWidth } = useWindowDimensions();
  const diagramWidth = Math.min(screenWidth - 40, screenWidth * 0.9);
  const diagramHeight = diagramWidth * 0.857;

  return (
    <View className="flex-1 pt-12">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Diagram Container */}
        <View className="mx-4 mt-6 mb-6">
          <View className="items-center mb-6">
            <SolarDiagram width={diagramWidth} height={diagramHeight} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
