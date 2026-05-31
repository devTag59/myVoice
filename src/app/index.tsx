import * as speecth from "expo-speech";
import { useState } from "react";
import { Text, TouchableOpacity, View,TextInput } from "react-native";
export default function Index() {
  const [isSpeaking, setIspeaking] = useState(false);
  const [text, setText] = useState("");
  const handleSeak = () => {
    if (isSpeaking) {
      speecth.stop();
      setIspeaking(false);
      return;
    }
    setIspeaking(true);
    speecth.speak(text, {
      language: "pt-pt",
      rate: 0.8,
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
      <TextInput
        placeholder="Digite algo para falar"
        className="border p-2 w-64 mt-4"
        value={text}
        onChangeText={setText}
      />
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
