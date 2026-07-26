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
                <View className="flex flex-row justify-between items-center p-4 bg-gray-50 rounded-full mb-2">
                    <Text className="font-bold">{item.nome}</Text>
                    <Text className="text-gray-500 font-italic">{item.idade}</Text>
                </View>
            )}
            />
        </>
    )
}