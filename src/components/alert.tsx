import {View, Text, Button } from "react-native"
type props={
    open:boolean
    text:String
    close:()=>void
}
export default function Alerts({open,text,close}:props){
    if(open)
        return(
        <View className="absolute flex-1 bg-black/50 w-full h-full items-center justify-center">
            <Text className="font-bold">{text}</Text>
            <Button title="Fechar" onPress={close}/>
        </View>
    )   
 
}