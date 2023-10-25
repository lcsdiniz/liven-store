import { FontAwesome5 } from '@expo/vector-icons';
import { Container, Content, DeleteButton, Info, Picture, Price, Quantity, QuantityButton, QuantityContainer, Title } from './styles';
import { CartProduct } from '../../contexts/CartContext';
import { formatsCurrency } from '../../utils/format';

type CartItemProps = Pick<CartProduct, "id" | "title" | "quantity" | "image" | "price"> & {
    changeQuantity: (id: number, quantity: string) => Promise<void>
    removeCartItem: (id: number) => Promise<void>
};

export default function CartItem({ id, title, quantity, image, price, changeQuantity, removeCartItem }: CartItemProps) {
    return (
        <Container>
            <Content>
                <Picture
                    source={{
                        uri: image,
                    }}
                    resizeMode='contain'
                />
    
                <Info>
                    <Title numberOfLines={1}>{title}</Title>
                    <Price>{formatsCurrency(price)}</Price>

                    <QuantityContainer>
                        <QuantityButton onPress={() => changeQuantity(id, "-1")} disabled={quantity === 1}>
                            <FontAwesome5 name="minus" size={12} color="black" />
                        </QuantityButton>
                        
                        <Quantity>{quantity}</Quantity>

                        <QuantityButton onPress={() => changeQuantity(id, "1")}>
                            <FontAwesome5 name="plus" size={12} color="black" />
                        </QuantityButton>
                    </QuantityContainer>
                </Info>
            </Content>

            <DeleteButton onPress={() => removeCartItem(id)}>
                <FontAwesome5 name="trash" size={20} color="red" />
            </DeleteButton>
        </Container>
    )
}