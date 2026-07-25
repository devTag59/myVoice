// app/_layout.jsx
import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useColorScheme } from "react-native";
import "../../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    configureBars();
  }, [isDark]);

  const configureBars = async () => {
    try {
      if (isDark) {
        // Tema Escuro
        await NavigationBar.setBackgroundColorAsync("#111827"); // bg-gray-900
        await NavigationBar.setButtonStyleAsync("light"); // Ícones brancos
      } else {
        // Tema Claro
        await NavigationBar.setBackgroundColorAsync("#ffffff");
        await NavigationBar.setButtonStyleAsync("dark"); // Ícones pretos
      }
    } catch (error) {
      console.log("Erro ao configurar barra:", error);
    }
  };

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: isDark ? "#111827" : "#ffffff",
          },
        }}
      />
    </>
  );
}