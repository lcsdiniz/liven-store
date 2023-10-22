import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import RootStackParamList from "../../types/rootStackParamList";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/products";
import { Product } from "../../types/product";
import { useCart } from "../../hooks/useCart";

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

export function ProductDetails({ route }: Props) {
    const [product, setProduct] = useState<Product | null>(null)

    const { productId } = route.params;
    const { updateCart } = useCart()

    async function fetchProductById() {
        const product = await getProductById(productId)

        setProduct(product)
    }

    useEffect(() => {
        fetchProductById()
    }, [])

    return (
        <View>
            {product ? (
                <View>
                    <Text>{product.id}</Text>
                    <Text>{product.title}</Text>
                    <Text>{product.description}</Text>
                    <Button onPress={() => updateCart(product)} title="ADD TO CART" />
                </View>
            ) : (
                <View>
                    <Text>Carregando</Text>
                </View>
            )}
        </View>
    )
}