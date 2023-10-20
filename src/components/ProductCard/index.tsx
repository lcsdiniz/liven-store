import { View, Text, Image } from "react-native";
import { Product } from "../../types/product";

type ProductCardProps = Pick<Product, "id" | "title" | "image" | "price">

export function ProductCard({ id, title, image, price }: ProductCardProps) {
    return (
        <View id={String(id)}>
            <Text>{title}</Text>
            <Image
                source={{
                    uri: image,
                }}
            />
            <Text>{price}</Text>
        </View>
    )
}