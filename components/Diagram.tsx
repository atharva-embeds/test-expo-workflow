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
  Image,
  G,
} from "react-native-svg";

interface SolarDiagramProps {
  width: number;
  height: number;
}

// Diagram layout constants
const DIAGRAM_WIDTH = 350;
const DIAGRAM_HEIGHT = 300;

// Component positions and dimensions
const ELECTRIC_TOWER_X = 20;
const ELECTRIC_TOWER_Y = 80;
const ELECTRIC_TOWER_WIDTH = 20;
const ELECTRIC_TOWER_HEIGHT = 140;

const OUTPUT_POINT_RADIUS = 5;
const OUTPUT_A_X = 45;
const OUTPUT_A_Y = 120;
const OUTPUT_B_X = 45;
const OUTPUT_B_Y = 150;
const OUTPUT_C_X = 45;
const OUTPUT_C_Y = 180;

const INVERTER_X = 90;
const INVERTER_Y = 130;
const INVERTER_WIDTH = 40;
const INVERTER_HEIGHT = 40;

const SOLAR_PANEL_X = 90;
const SOLAR_PANEL_Y = 70;
const SOLAR_PANEL_WIDTH = 40;
const SOLAR_PANEL_HEIGHT = 30;

const EMU_X = 90;
const EMU_Y = 190;
const EMU_WIDTH = 40;
const EMU_HEIGHT = 30;

const CLOUD_X = 175;
const CLOUD_Y = 125;
const CLOUD_WIDTH = 40;
const CLOUD_HEIGHT = 20;

const MOBILE_X = 265;
const MOBILE_Y = 105;
const MOBILE_WIDTH = 15;
const MOBILE_HEIGHT = 30;

const LAPTOP_X = 265;
const LAPTOP_Y = 155;
const LAPTOP_WIDTH = 30;
const LAPTOP_HEIGHT = 20;

const SECOND_INVERTER_X = 55;
const SECOND_INVERTER_Y = 135;
const SECOND_INVERTER_WIDTH = 30;
const SECOND_INVERTER_HEIGHT = 30;

const SOLAR_PANELS_X = 120;
const SOLAR_PANELS_Y = 135;
const SOLAR_PANELS_WIDTH = 40;
const SOLAR_PANELS_HEIGHT = 20;

const MONITOR_X = 195;
const MONITOR_Y = 135;
const MONITOR_WIDTH = 30;
const MONITOR_HEIGHT = 30;

const SECOND_CLOUD_X = 255;
const SECOND_CLOUD_Y = 120;
const SECOND_CLOUD_WIDTH = 40;
const SECOND_CLOUD_HEIGHT = 20;

const DASHBOARD_X = 270;
const DASHBOARD_Y = 160;
const DASHBOARD_WIDTH = 25;
const DASHBOARD_HEIGHT = 15;

const MOBILE_APP_X = 305;
const MOBILE_APP_Y = 155;
const MOBILE_APP_WIDTH = 12;
const MOBILE_APP_HEIGHT = 25;

// Arrow positions
const ARROW_TO_INVERTER_X1 = 25;
const ARROW_TO_INVERTER_Y1 = 150;
const ARROW_TO_INVERTER_X2 = 45;
const ARROW_TO_INVERTER_Y2 = 150;

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
        viewBox={`0 0 ${DIAGRAM_WIDTH} ${DIAGRAM_HEIGHT}`}
        className="shadow-2xl rounded-2xl"
      >
        <Defs>
          {/* Light Background Gradient */}
          <LinearGradient id="diagramBg" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FFFFFF" />
            <Stop offset="0.5" stopColor="#F8FAFC" />
            <Stop offset="1" stopColor="#F1F5F9" />
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

        {/* Power Source Section */}
        <G id="power-source">
          {/* Electric Tower */}
          <Image
            href={require("../assets/solar.png")}
            x={ELECTRIC_TOWER_X}
            y={ELECTRIC_TOWER_Y}
            width={ELECTRIC_TOWER_WIDTH}
            height={ELECTRIC_TOWER_HEIGHT}
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
            cx={OUTPUT_A_X}
            cy={OUTPUT_A_Y}
            r={OUTPUT_POINT_RADIUS}
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
            cx={OUTPUT_B_X}
            cy={OUTPUT_B_Y}
            r={OUTPUT_POINT_RADIUS}
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
            cx={OUTPUT_C_X}
            cy={OUTPUT_C_Y}
            r={OUTPUT_POINT_RADIUS}
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
        </G>

        {/* Inverter */}
        <Image
          href={require("../assets/solar.png")}
          x={INVERTER_X}
          y={INVERTER_Y}
          width={INVERTER_WIDTH}
          height={INVERTER_HEIGHT}
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
        <Image
          href={require("../assets/solar.png")}
          x={SOLAR_PANEL_X}
          y={SOLAR_PANEL_Y}
          width={SOLAR_PANEL_WIDTH}
          height={SOLAR_PANEL_HEIGHT}
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
        <Image
          href={require("../assets/solar.png")}
          x={EMU_X}
          y={EMU_Y}
          width={EMU_WIDTH}
          height={EMU_HEIGHT}
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
        <Image
          href={require("../assets/solar.png")}
          x={CLOUD_X}
          y={CLOUD_Y}
          width={CLOUD_WIDTH}
          height={CLOUD_HEIGHT}
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

        {/* End User Devices Section */}
        <G id="end-devices">
          {/* Mobile */}
          <Image
            href={require("../assets/solar.png")}
            x={MOBILE_X}
            y={MOBILE_Y}
            width={MOBILE_WIDTH}
            height={MOBILE_HEIGHT}
          />
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
          <Image
            href={require("../assets/solar.png")}
            x={LAPTOP_X}
            y={LAPTOP_Y}
            width={LAPTOP_WIDTH}
            height={LAPTOP_HEIGHT}
          />
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
            x1={ARROW_TO_INVERTER_X1}
            y1={ARROW_TO_INVERTER_Y1}
            x2={ARROW_TO_INVERTER_X2}
            y2={ARROW_TO_INVERTER_Y2}
            stroke="url(#energyFlow)"
            strokeWidth="3"
          />
          <Path d="M 45 145 L 50 150 L 45 155 Z" fill="url(#energyFlow)" />

          {/* Inverter */}
          <Image
            href={require("../assets/solar.png")}
            x={SECOND_INVERTER_X}
            y={SECOND_INVERTER_Y}
            width={SECOND_INVERTER_WIDTH}
            height={SECOND_INVERTER_HEIGHT}
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
          <Image
            href={require("../assets/solar.png")}
            x={SOLAR_PANELS_X}
            y={SOLAR_PANELS_Y}
            width={SOLAR_PANELS_WIDTH}
            height={SOLAR_PANELS_HEIGHT}
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
          <Image
            href={require("../assets/solar.png")}
            x={MONITOR_X}
            y={MONITOR_Y}
            width={MONITOR_WIDTH}
            height={MONITOR_HEIGHT}
          />
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
          <Image
            href={require("../assets/solar.png")}
            x={SECOND_CLOUD_X}
            y={SECOND_CLOUD_Y}
            width={SECOND_CLOUD_WIDTH}
            height={SECOND_CLOUD_HEIGHT}
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
          <Image
            href={require("../assets/solar.png")}
            x={DASHBOARD_X}
            y={DASHBOARD_Y}
            width={DASHBOARD_WIDTH}
            height={DASHBOARD_HEIGHT}
          />
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
          <Image
            href={require("../assets/solar.png")}
            x={MOBILE_APP_X}
            y={MOBILE_APP_Y}
            width={MOBILE_APP_WIDTH}
            height={MOBILE_APP_HEIGHT}
          />
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
        </G>
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
