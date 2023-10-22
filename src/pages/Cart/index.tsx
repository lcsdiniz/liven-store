import { View, Text, Button } from "react-native";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";
import { Cart as CartType } from "../../contexts/CartContext"
import CartItem from "../../components/CartItem";

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
                    <CartItem
                        id={product.id}
                        title={product.title}
                        quantity={product.quantity}
                        image={product.image}
                        price={product.price}
                    />
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