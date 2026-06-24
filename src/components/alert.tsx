import { View, Text, Modal, TouchableOpacity } from "react-native"
import * as Haptics from 'expo-haptics';

type Props = {
    open: boolean
    text: String
    close: () => void
}

export default function Alerts({ open, text, close }: Props) {
    const handleClose = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        close()
    }

    return (
        <Modal
            visible={open}
            transparent={true}
            animationType="fade"
        >
            <View className="flex-1 bg-black/50 items-center justify-center">
                <View className="bg-white rounded-2xl p-6 w-100">
                    <Text className="font-light text-center mb-4">{text}</Text>
                    <TouchableOpacity
                        onPress={handleClose}
                        className="bg-blue-500 rounded-xl p-3 items-center"
                    >
                        <Text className="text-white font-bold">Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}