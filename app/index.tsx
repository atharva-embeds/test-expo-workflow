import "../global.css";
import React from "react";
import { View } from "react-native";
import Diagram from "../components/Diagram";

const Root = () => {
  return (
    <View style={{ flex: 1 }}>
      <Diagram />
    </View>
  );
};

export default Root;
