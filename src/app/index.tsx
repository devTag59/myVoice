import { Ionicons } from "@expo/vector-icons";
import * as speecth from "expo-speech";
import { useState } from "react";
import {useColorScheme} from "nativewind";
import * as Haptics from "expo-haptics";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Alerts from "../components/alert";
import Sugest from "../components/sugest";
import { StatusBar } from "expo-status-bar";
export default function Index() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isSpeaking, setIspeaking] = useState(false);
  const [text, setText] = useState("");
  const [openModal, setModal] = useState(false);
  const [TextModal, setTextModal] = useState("");
  const handleSeak = () => {
    if (isSpeaking) {
      speecth.stop();
      setIspeaking(false);
      return;
    }
    if (!text) {
      setModal(true);
      setTextModal("Por Favor digite alguma coisa para falar");
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
    <SafeAreaView className="flex-1 bg-slate-200 dark:bg-slate-900 p-4 flex flex-col">
      <StatusBar animated={true} style={colorScheme === "dark" ? "light" : "dark"} />
      <View className="flex w-full flex-row items-center justify-between pb-2">
        <Text className="text-2xl font-bold text-blue-800 dark:text-white">myVoice</Text>
        <TouchableOpacity className="w-40 h-10 bg-slate-500 rounded-full flex flex-row justify-around items-center p-2"
        onPress={() =>{ Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success), toggleColorScheme()}}>
          <View className="flex flex-row gap-2 items-center">
            <Text className="text-sm font-bold text-white">
              {colorScheme === "dark" ? "light" : "light"}
            </Text>
          </View>
          <View>
            <Ionicons name={colorScheme==="dark"?"sunny":"moon"} size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <Alerts
        open={openModal}
        text={TextModal}
        close={() => {
          setModal(false);
        }}
      />
      
      <KeyboardAvoidingView behavior="padding" className="flex-1 flex flex-col justify-end pb-2" keyboardVerticalOffset={10}>
        <Sugest/>
        <View className="h-40 w-full
         my-4">
          <TextInput
            h-40
            placeholder="Digite algo para falar"
            className="border-none bg-white dark:placeholder:text-white dark:bg-gray-800 dark:text-white rounded-md flex-1 w-full text-start p-4 text-lg"
            value={text}
            onChangeText={setText}
            multiline={true}
            textAlignVertical="top"
          />
        </View>
        <View className="w-full flex flex-row justify-between items-center">
          <TouchableOpacity
            onPress={handleSeak}
            className="bg-blue-500 px-4 py-2 rounded-md mt-4 min-w-64 h-14 shadow-black items-center justify-center"
          > 
            <Text className="text-white font-bold">
              {isSpeaking ? "Parar de falar" : "clique para falar"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setText("");
            }}
            className="bg-gray-500 px-4 py-2 rounded-md mt-4 ml-2 min-w-fit h-14 shadow-black flex-row gap-1 items-center justify-center"
          >
            <Text className="text-white font-bold">Limpar</Text>
            <View>
            <Ionicons name="arrow-undo-outline" size={20} color="white" />
          </View>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-center items-center mt-4">
          <Text className="text-sm text-gray-500">
            Desenvolvido por{" "}
            <Text className="text-blue-500 font-bold">Eno</Text>
            <Text className="text-green-500 font-italic">Bit</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
