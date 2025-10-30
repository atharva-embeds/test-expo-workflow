import React from "react";
import { View, ScrollView, useWindowDimensions } from "react-native";
import Svg, { Image, Path } from "react-native-svg";
import { imagePositions, diagramConstants, paths } from "./diagramConstants";
const allPaths = Object.values(paths);

interface Point {
  x: number;
  y: number;
}

const dist = (a: Point, b: Point) =>
  Math.hypot((a.x - b.x) as number, (a.y - b.y) as number);
const normalize = (v: Point) => {
  const len = Math.hypot(v.x as number, v.y as number) || 1;
  return { x: v.x / len, y: v.y / len };
};

function pointsToRoundedPath(points: Point[], radius = 12): string {
  if (!points || points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];

    const lenPrev = dist(prev, curr);
    const lenNext = dist(curr, next);

    if (lenPrev < 1e-6 || lenNext < 1e-6) {
      d += ` L ${curr.x} ${curr.y}`;
      continue;
    }

    const r = Math.min(radius, lenPrev / 2, lenNext / 2);
    const dirPrev = normalize({ x: prev.x - curr.x, y: prev.y - curr.y });
    const dirNext = normalize({ x: next.x - curr.x, y: next.y - curr.y });

    const t1 = { x: curr.x + dirPrev.x * r, y: curr.y + dirPrev.y * r };
    const t2 = { x: curr.x + dirNext.x * r, y: curr.y + dirNext.y * r };

    d += ` L ${Number(t1.x.toFixed(3))} ${Number(t1.y.toFixed(3))}`;
    d += ` Q ${Number(curr.x.toFixed(3))} ${Number(curr.y.toFixed(3))} ${Number(
      t2.x.toFixed(3),
    )} ${Number(t2.y.toFixed(3))}`;
  }

  const last = points[points.length - 1];
  d += ` L ${last.x} ${last.y}`;

  return d;
}

interface SolarDiagramProps {
  width: number;
  height: number;
}

const SolarDiagram: React.FC<SolarDiagramProps> = ({ width, height }) => {
  return (
    <View>
      <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${diagramConstants.DIAGRAM_WIDTH} ${diagramConstants.DIAGRAM_HEIGHT}`}
      >

        {/* Paths */}
        {allPaths.map((path, index) => (
          <Path
            key={index}
            d={pointsToRoundedPath(path.points)}
            stroke="#ADD8E6"
            strokeWidth="2"
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}


        {/* Electric Tower */}
        <Image
          href={require("../assets/images/tower.png")}
          x={imagePositions.electricTower.x}
          y={imagePositions.electricTower.y}
          width={imagePositions.electricTower.width}
          height={imagePositions.electricTower.height}
        />

        {/* Inverter */}
        <Image
          href={require("../assets/images/inverter3.png")}
          x={imagePositions.inverter.x}
          y={imagePositions.inverter.y}
          width={imagePositions.inverter.width}
          height={imagePositions.inverter.height}
        />

        {/* Solar Panel */}
        <Image
          href={require("../assets/download.png")}
          x={imagePositions.solarPanel.x}
          y={imagePositions.solarPanel.y}
          width={imagePositions.solarPanel.width}
          height={imagePositions.solarPanel.height}
        />
      </Svg>
    </View>
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
