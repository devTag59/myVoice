import { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";
import "../../global.css";

export default function RootLayout() {
  
  useEffect(() => {
    // Configurar barra de navegação escura
    if (Platform.OS === 'android') {
      NavigationBar.setButtonStyleAsync("dark");
      NavigationBar.setBackgroundColorAsync("#111827"); // bg-gray-900
    }
  }, []);

  return (
    <>
      <StatusBar 
        style="dark"           // Texto branco (para fundo escuro)
        translucent={true}
        backgroundColor="transparent"
      />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#111827", // bg-gray-900
          },
        }}
      />
    </>
  );
}