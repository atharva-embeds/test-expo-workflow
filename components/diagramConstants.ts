// Diagram layout constants
export const DIAGRAM_WIDTH = 350;
export const DIAGRAM_HEIGHT = 300;

// Image component positions and dimensions
export const imagePositions = {
  electricTower: {
    x: -120,
    y: 0,
    width: 340,
    height: 200,
  },
  inverter: {
    x: -60,
    y: 150,
    width: 230,
    height: 180,
  },
  solarPanel: {
    x: 200,
    y: 70,
    width: 150,
    height: 140,
  },
};

// Path points and configurations
export const paths = {
  towerToInverter: {
    points: [
      { x: 230, y: 120 },
      { x: 100, y: 190 },
      { x: 130, y: 260 },
    ],
  },
  inverterToSolar: {
    points: [
      { x: 330, y: 180 },
      { x: 200, y: 120 },
    ],
  },
};

// Diagram constants
export const diagramConstants = {
  DIAGRAM_WIDTH,
  DIAGRAM_HEIGHT,
};
