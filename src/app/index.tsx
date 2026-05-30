import { Text, View } from "react-native";

export default function Index() {
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
    </View>
  );
}
