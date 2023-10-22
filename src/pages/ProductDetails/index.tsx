import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import RootStackParamList from "../../types/rootStackParamList";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/products";
import { Product } from "../../types/product";
import { useCart } from "../../hooks/useCart";
import { Container, Description, Divider, InfoContainer, InfoTitle, Picture, PictureContainer, Price, Rate, RateContainer, Title } from "./styles";

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
        <Container>
            {product ? (
                <>
                    <PictureContainer>
                        <Picture
                            source={{
                                uri: product.image,
                            }}
                        />
                    </PictureContainer>

                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Price>${product.price}</Price>
                        <RateContainer>
                            <FontAwesome name="star" size={16} color="gold" />
                            <Rate>{`${product.rating.rate} (${product.rating.count})`}</Rate>
                        </RateContainer>
                    </InfoContainer>


                    <View>
                        <InfoContainer>
                            <InfoTitle>Category</InfoTitle>
                            <Description>{product.category}</Description>
                        </InfoContainer>
                            
                        <Divider />
                            
                        <InfoContainer>
                            <InfoTitle>Description</InfoTitle>
                            <Description>{product.description}</Description>
                        </InfoContainer>
                    </View>
                    
                    <Button onPress={() => updateCart(product)} title="ADD TO CART" />
                </>
            ) : (
                <View>
                    <Text>Carregando</Text>
                </View>
            )}
        </Container>
    )
}