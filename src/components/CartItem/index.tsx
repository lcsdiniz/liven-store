import { FontAwesome5 } from '@expo/vector-icons';
import { Container, Info, Picture, Price, Quantity, QuantityButton, QuantityContainer, Title } from './styles';
import { View } from 'react-native';
import { CartProduct } from '../../contexts/CartContext';

type CartItemProps = Pick<CartProduct, "id" | "title" | "quantity" | "image" | "price">;

export default function CartItem({ id, title, quantity, image, price }: CartItemProps) {
    return (
        <Container id={String(id)}>
            <Picture
                source={{
                    uri: image,
                }}
            />

            <Info>
                <View>
                    <Title numberOfLines={1}>{title}</Title>
                    <Price>${price}</Price>
                </View>

                <QuantityContainer>
                    <QuantityButton>
                        <FontAwesome5 name="minus" size={16} color="black" />
                    </QuantityButton>
                    
                    <Quantity value={String(quantity)} />

                    <QuantityButton>
                        <FontAwesome5 name="plus" size={16} color="black" />
                    </QuantityButton>
                </QuantityContainer>    
            </Info>
        </Container>
    )
}