import react from "react";
import { View, Text, FlatList} from "react-native";
export default function Sugest() {
    const dados = [
    { id: '1', nome: 'Batata', idade: "Potato" },
    { id: '2', nome: 'Carro', idade: "car" },
    { id: '3', nome: 'Child', idade:"criança" },
  ];
    return(
        <>
            <Text className="text-lg font-bold text-blue-800 mb-2 text-center">Exemplos que podem lhe ajudar</Text>
            <FlatList
            data={dados}
            renderItem={({ item }) => (
                <View className="flex flex-row justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-full mb-2">
                    <Text className="font-bold text-gray-800 dark:text-white">{item.nome}</Text>
                    <Text className="text-gray-500 font-italic dark:text-gray-400">{item.idade}</Text>
                </View>
            )}
            />
        </>
    )
}