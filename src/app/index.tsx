import * as speecth from "expo-speech";
import { useState } from "react";
import {Ionicons, MaterialIcons, FontAwesome5} from "@expo/vector-icons"
import { Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Alerts from "../components/alert";
export default function Index() {
  const [isSpeaking, setIspeaking] = useState(false);
  const [text, setText] = useState("");
  const [openModal, setModal]=useState(false)
  const [TextModal, setTextModal]=useState("")
  const handleSeak = () => {
    if (isSpeaking) {
      speecth.stop();
      setIspeaking(false);
      return;
    }
    if (!text) {
      setModal(true)
      setTextModal("Por Favor digite alguma coisa para falar")
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
      flex flex-column justify-between p-4"
      >
        <View className="flex w-full flex-row items-center justify-between pb-2">
          <Text className="text-2xl font-bold text-blue-800">myVoice</Text>
          <View className="w-40 h-10 bg-slate-500 rounded-full flex flex-row justify-around items-center p-2">
            <View>
            <Text className="w-full text-sm font-bold text-white">
              EMERGENCIA
            </Text>
            </View>
            <View>
              <Ionicons name="alert-circle" size={20} color="red" />
            </View>
          </View>
        </View>
        <Alerts open={openModal} text={TextModal} close={()=>{setModal(false)}}/>\
          <View
           
          >
        <View className="h-40 w-full my-4">
          <TextInput
          h-40
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
      </View>
    </SafeAreaView>
  );
}
