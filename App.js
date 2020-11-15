import React, { useState } from "react";
import { I18nManager } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import getFonts from "./app/utils/fonts";
import { AppLoading } from "expo";
import StackNavigator from "./app/containers/StackNavigator";

// Support for RTL
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App = () => {
  const [fontLoading, setFontLoading] = useState(false);

  if (fontLoading) {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoading(true)} />
    );
  }
};

export default App;
