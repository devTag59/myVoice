import * as speecth from "expo-speech";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  const [isSpeaking, setIspeaking] = useState(false);
  const [text, setText] = useState("");
  const handleSeak = () => {
    if (isSpeaking) {
      speecth.stop();
      setIspeaking(false);
      return;
    }
    if (!text) {
      alert("Digite algo para falar");
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
    <SafeAreaView className="flex-1">
      <View
        className="flex-1
      bg-slate-200
      flex flex-column items-center justify-between p-4"
      >
        <View className="w-full flex-row items-center justify-between">
          <Text className="text-2xl font-bold text-blue-800">myVoice</Text>
          <View className="w-fit p-2 h-10 bg-red-400 rounded-full">
            <Text className="text-center text-lg font-bold text-gray-500">
              EMERGENCIA
            </Text>
          </View>
        </View>
        <View className="w-full h-full bg-slate-500">

        </View>
        <View className="w-full h-72 my-4">
          <TextInput
            placeholder="Digite algo para falar"
            className="border-none bg-white rounded-md flex-1 w-full text-start p-4 text-lg"
            value={text}
            onChangeText={setText}
            multiline={true}
            textAlignVertical="top"
          />
        </View>
        <TouchableOpacity
          onPress={handleSeak}
          className="bg-blue-500 px-4 py-2 rounded-md mt-4 w-full h-14 shadow-black items-center justify-center"
        >
          <Text className="text-white font-bold">
            {isSpeaking ? "Parar de falar" : "clique para falar"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
