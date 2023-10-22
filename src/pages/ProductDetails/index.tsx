import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import RootStackParamList from "../../types/rootStackParamList";

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

export function ProductDetails({ route }: Props) {
    const { productId } = route.params;

    return (
        <View>
            <Text>ProductDetails {productId}</Text>
        </View>
    )
}