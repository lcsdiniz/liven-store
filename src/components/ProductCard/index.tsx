import { Product } from "../../types/product";
import { Container, Picture, Price, TextContainer, Title } from "./styles";

type ProductCardProps = Pick<Product, "id" | "title" | "image" | "price">

export function ProductCard({ id, title, image, price }: ProductCardProps) {
    return (
        <Container id={String(id)} onPress={() => console.log("Go to details")}>
            <Picture
                source={{
                    uri: image,
                }}
            />

            <TextContainer>
                <Title numberOfLines={2}>{title}</Title>
            
                <Price>${price}</Price>
            </TextContainer>
        </Container>
    )
}