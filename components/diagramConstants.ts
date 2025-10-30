// Diagram layout constants
export const DIAGRAM_WIDTH = 350;
export const DIAGRAM_HEIGHT = 300;

// Image component positions and dimensions
export const imagePositions = {
  electricTower: {
    x: 120,
    y: 100,
    width: 340,
    height: 200,
  },
  inverter: {
    x: 60,
    y: -10,
    width: 230,
    height: 180,
  },
  solarPanel: {
    x: -20,
    y: 150,
    width: 150,
    height: 140,
  },
  emu: {
    x: 94,
    y: 140,
    width: 180,
    height: 160,
  },
  cloud: {
    x: 200,
    y: -50,
    width: 100,
    height: 60,
  },
  phone: {
    x: 300,
    y: 200,
    width: 80,
    height: 120,
  },
};

// Path points and configurations
export const paths = {
  towerToInverter1: {
    points: [
      { x: 200, y: 60 },
      { x: 310, y: 60 },
      { x: 310, y: 172 },
    ],
  },
  towerToInverter2: {
    points: [
      { x: 200, y: 80 },
      { x: 290, y: 80 },
      { x: 290, y: 230 },
    ],
  },
  towerToInverter3: {
    points: [
      { x: 200, y: 100 },
      { x: 270, y: 100 },
      { x: 270, y: 150 },
    ],
  },

  inverterToSolar: {
    points: [
      { x: 50, y: 240 },
      { x: 50, y: 60 },
      { x: 150, y: 60 },
    ],
  },

  inverterToSolar2: {
    points: [
      { x: 80, y: 240 },
      { x: 80, y: 90 },
      { x: 150, y: 90 },
    ],
  },

  inverterToEmu: {
    points: [
      { x: 180, y: 240 },
      { x: 180, y: 60 },
    ],
  },
};

// Diagram constants
export const diagramConstants = {
  DIAGRAM_WIDTH,
  DIAGRAM_HEIGHT,
};
