import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Text } from "react-native";

const ToplearnText = ({ size, fontFamily, children, styles }) => {
  return (
    <Text style={[{ fontFamily, fontSize: RFPercentage(size) }, styles]}>
      {children}
    </Text>
  );
};

export default ToplearnText;
