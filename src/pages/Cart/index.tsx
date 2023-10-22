import { useEffect, useMemo, useState } from "react";
import { View, Button, Alert } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CartItem } from "../../components";
import { useCart } from "../../hooks/useCart";
import { Cart as CartType } from "../../contexts/CartContext"
import { formatsCurrency } from "../../utils/format";

import { Container, EmptyCart, Message, Total, TotalContainer, TotalValue } from "./styles";

export function Cart() {
    const [cart, setCart] = useState<CartType>([])

    const navigation = useNavigation();
    const { getCart, updateQuantity, deleteCart, deleteItem } = useCart()
    
    async function fetchCart() {
       setCart(await getCart())
    }

    async function eraseCart() {
        await deleteCart()
        setCart([])
    }

    async function changeQuantity(id: number, quantity: string) {
        const updatedCart = await updateQuantity(id, Number(quantity))
        setCart(updatedCart!)
    }

    async function removeProduct(id: number) {
        const updatedCart = await deleteItem(id)
        setCart(updatedCart!)
    }

    useEffect(() => {
        fetchCart()
    }, [])

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

                    <Button onPress={eraseCartAlert} title="CLEAN CART" color="#ff4268" />
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