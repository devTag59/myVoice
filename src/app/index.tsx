import * as speecth from "expo-speech";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  const [isSpeaking, setIspeaking] = useState(false);
  const handleSeak = () => {
    if (isSpeaking) {
      speecth.stop();
      setIspeaking(false);
      return;
    }
    setIspeaking(true);
    speecth.speak("Bem Vindo ao myVoice", {
      language: "pt-pt",
      rate: 1.0,
      pitch: 1.0,
      onDone: () => setIspeaking(false),
      onError: (error) => setIspeaking(false),
    });
  };
  return (
    <View
      className="flex-1 bg-slate-200 justify-center items-center"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Bem Vindo ao myVoice</Text>
      <TouchableOpacity
        onPress={handleSeak}
        className="bg-blue-500 px-4 py-2 rounded-md mt-4"
      >
        <Text className="text-white font-bold">
          {isSpeaking ? "Parar" : "Falar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
