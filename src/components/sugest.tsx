import {useEffect,useState}from "react";
import { View, Text, FlatList} from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function Sugest() {
    interface dados{
        id:number;
        nome:string;
        mensagem:string;
    }
    const [dados, setDados] = useState<dados[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    fetchMensagems()
  },[])

  const fetchMensagems =async()=>{
    try{
    const mensagens=await fetch("http://192.168.0.235:3000/Mensagens")
    const msg=await mensagens.json()
    console.log("msg",msg)
    setDados(msg)
    }catch(error){
        console.log("erro buscando mensagens",error)
    }finally{
        setLoading(false)
    }
  } 
  if(loading) return <View className="flex-1 flex flex-row justify-center align-center items-center"><Text className="text-lg font-bold text-blue-800 text-center"><Ionicons name="build" size={40} /> Carregando...</Text></View>
    return(
        <>
            <Text className="text-lg font-bold text-blue-800 mb-2 text-center">Exemplos que podem lhe ajudar</Text>
            <FlatList
            data={dados}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({ item }) => (
                <View className="flex flex-row justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-full mb-2">
                    <Text className="font-bold text-gray-800 dark:text-white">{item.nome}</Text>
                    <Text className="text-gray-500 font-italic dark:text-gray-400">{item.mensagem}</Text>
                </View>
            )}
            ListEmptyComponent={
                    <Text className="text-gray-400 text-center">
            Nenhuma sugestão disponível
          </Text>
            }
            />
        </>
    )
}