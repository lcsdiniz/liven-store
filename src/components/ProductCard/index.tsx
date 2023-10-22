import { useNavigation } from "@react-navigation/native";
import { Product } from "../../types/product";
import { Container, Picture, Price, TextContainer, Title } from "./styles";
import { formatsCurrency } from "../../utils/format";

type ProductCardProps = Pick<Product, "id" | "title" | "image" | "price">

export default function ProductCard({ id, title, image, price }: ProductCardProps) {
    const navigation = useNavigation();
    
    return (
        <Container id={String(id)} onPress={() => navigation.navigate("ProductDetails", { productId: id })}>
            <Picture
                source={{
                    uri: image,
                }}
            />

            <TextContainer>
                <Title numberOfLines={2}>{title}</Title>
            
                <Price>{formatsCurrency(price)}</Price>
            </TextContainer>
        </Container>
    )
}