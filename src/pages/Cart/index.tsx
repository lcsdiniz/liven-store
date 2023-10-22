import { View, Text, Button } from "react-native";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";
import { Cart as CartType } from "../../contexts/CartContext"

export function Cart() {
    const [cart, setCart] = useState<CartType>([])

    const { getCart, updateCart, deleteCart } = useCart()
    
    async function fetchCart() {
       setCart(await getCart())
    }

    async function eraseCart() {
        await deleteCart()
        setCart([])
    }

    useEffect(() => {
        fetchCart()
    }, [])

    return (
        <View>
            {cart.length !== 0 ? (
                cart.map(product => (
                    <View>
                        <Text>{product.id}</Text>
                        <Text>{product.title}</Text>
                        <Text>{product.quantity}</Text>
                    </View>
                ))
            ) : (
                <View>
                    <Text>EMPTY</Text>
                </View>
            )}

            <Button onPress={eraseCart} title="DELETE ALL"></Button>
        </View>
    )
}