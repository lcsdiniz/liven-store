import { View, Text, Button } from "react-native";
import { useCart } from "../../hooks/useCart";
import { useEffect, useMemo, useState } from "react";
import { Cart as CartType } from "../../contexts/CartContext"
import CartItem from "../../components/CartItem";
import { Container } from "./styles";

export function Cart() {
    const [cart, setCart] = useState<CartType>([])

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
        console.log(updatedCart)
        setCart(updatedCart!)
    }

    async function removeCartItem(id: number) {
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

    return (
        <Container>
            {cart.length !== 0 ? (
                cart.map(product => (
                    <View id={String(product.id)}>
                        <CartItem
                            id={product.id}
                            title={product.title}
                            quantity={product.quantity}
                            image={product.image}
                            price={product.price}
                            changeQuantity={changeQuantity}
                            removeCartItem={removeCartItem}
                        />
                    </View>
                ))
            ) : (
                <View>
                    <Text>EMPTY</Text>
                </View>
            )}
            <Text>TOTAL: {totalPrice}</Text>
            <Button onPress={eraseCart} title="DELETE ALL"></Button>
        </Container>
    )
}