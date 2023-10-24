import { useMemo } from "react";
import { View, Button, Alert } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CartItem } from "../../components";
import { useCart } from "../../hooks/useCart";
import { formatsCurrency } from "../../utils/format";
import RootStackParamList from "../../types/rootStackParamList";
import { Container, EmptyCart, Message, Total, TotalContainer, TotalValue } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Cart({ navigation }: Props) {
    const { cart, updateQuantity, deleteCart, deleteItem } = useCart()
    
    async function eraseCart() {
        await deleteCart()
    }

    async function changeQuantity(id: number, quantity: string) {
        await updateQuantity(id, Number(quantity))
    }

    async function removeProduct(id: number) {
        await deleteItem(id)
    }

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, item) => {
          const itemTotal = item.price * item.quantity;
          return acc + itemTotal;
        }, 0);
    }, [cart]);

    async function eraseCartAlert() {
        Alert.alert('Clean Cart', 'Remove all products from your cart?', [
            {
                text: 'No',
                style: 'cancel',
            },
            {text: 'OK', onPress: eraseCart},
        ]);
    }

    async function removeProductAlert(id: number) {
        Alert.alert('Remove Product', 'Remove this product from your cart?', [
            {
                text: 'No',
                style: 'cancel',
            },
            {text: 'OK', onPress: () => removeProduct(id)},
        ]);
    }

    return (
        <Container>
            {cart.length !== 0 ? (
                <>
                    {cart.map(product => (
                        <View key={product.id.toString()}>
                            <CartItem
                                id={product.id}
                                title={product.title}
                                quantity={product.quantity}
                                image={product.image}
                                price={product.price}
                                changeQuantity={changeQuantity}
                                removeCartItem={removeProductAlert}
                            />
                        </View>
                    ))}

                    <TotalContainer>
                        <Total>TOTAL: </Total>
                        <TotalValue>{formatsCurrency(totalPrice)}</TotalValue>
                    </TotalContainer>

                    <Button
                        onPress={eraseCartAlert}
                        title="CLEAN CART"
                        color="#ff4268"
                    />
                </>
            ) : (
                <EmptyCart>
                    <Message>Your cart is empty</Message>
                    <FontAwesome name="shopping-cart" size={72} color="black" />
                    <Button onPress={() => navigation.navigate("Home")} title="Back to Home" />
                </EmptyCart>
            )}
        </Container>
    )
}