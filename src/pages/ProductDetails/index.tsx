import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, ScrollView, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import RootStackParamList from "../../types/rootStackParamList";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/products";
import { Product } from "../../types/product";
import { useCart } from "../../hooks/useCart";
import { AddToCart, BackButton, ButtonText, Container, Description, Divider, Header, InfoContainer, InfoTitle, Picture, PictureContainer, Price, Rate, RateContainer, Title } from "./styles";
import { CartButton, Loading } from "../../components";
import { FontAwesome5 } from '@expo/vector-icons'; 
type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

export function ProductDetails({ route, navigation }: Props) {
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

    function navigateToCart() {
        navigation.navigate('Cart')
    }

    return (
            <View style={{ flex: 1 }}>
                <Header>
                    <BackButton onPress={() => navigation.goBack()}>
                        <FontAwesome5 name="arrow-left" size={24} color="black" />
                    </BackButton>

                    <CartButton navigate={navigateToCart}/>
                </Header>
            {product ? (
                <ScrollView>
                    <Container>
                        <PictureContainer>
                            <Picture
                                source={{
                                    uri: product.image,
                                }}
                            />
                        </PictureContainer>

                        <View>
                            <InfoContainer>
                                <Title>{product.title}</Title>
                                <Price>${product.price}</Price>
                                <RateContainer>
                                    <FontAwesome name="star" size={16} color="gold" />
                                    <Rate>{`${product.rating.rate} (${product.rating.count})`}</Rate>
                                </RateContainer>
                            </InfoContainer>

                            <AddToCart onPress={() => updateCart(product)}>
                                <ButtonText>ADD TO CART</ButtonText>
                            </AddToCart>
                        </View>


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
                        
                    </Container>
                </ScrollView>
            ) : (
                <Loading />
            )}
            </View>
    )
}