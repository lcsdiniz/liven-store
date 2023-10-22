import React, { createContext, ReactNode, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types/product';

export type CartProduct = Product & {
	quantity: number
}

export type Cart = CartProduct[]

export interface CartContextType {
	cart: Cart;
	updateCart: (product: Product) => Promise<void>;
	deleteCart: () => Promise<void>;
	deleteItem: (productId: number) => Promise<void>;
	updateQuantity: (productId: number, newQuantity: number) => Promise<void>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
	children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [cart, setCart] = useState<Cart>([])

	async function updateCart(product: Product) {
		const cart = await AsyncStorage.getItem('@liven-cart')

		if(cart) {
			const parsedCart: Cart = JSON.parse(cart)
			const alreadyInCart = parsedCart.find(arrProduct => arrProduct.id == product.id)

			if(alreadyInCart) {
				const productIndex = parsedCart.findIndex(arrProduct => arrProduct.id == product.id)
				parsedCart[productIndex].quantity = parsedCart[productIndex].quantity + 1
			} else {
				parsedCart.push({ ...product, quantity: 1 })
			}

			await AsyncStorage.setItem('@liven-cart', JSON.stringify(parsedCart))
			setCart(parsedCart)
		} else if(!cart) {
			await AsyncStorage.setItem('@liven-cart', JSON.stringify([
				{...product, quantity: 1 }
			]))
			setCart([{...product, quantity: 1 }])

		}
	};

	async function updateQuantity(productId: number, newQuantity: number) {
		const cart = await AsyncStorage.getItem('@liven-cart')

		if(cart) {
			const parsedCart: Cart = JSON.parse(cart)

			const productIndex = parsedCart.findIndex(arrProduct => arrProduct.id == productId)
			parsedCart[productIndex].quantity = parsedCart[productIndex].quantity + newQuantity

			await AsyncStorage.setItem('@liven-cart', JSON.stringify(parsedCart))
			setCart(parsedCart)
		}
	};

	async function deleteItem(productId: number) {
		const cart = await AsyncStorage.getItem('@liven-cart')

		if(cart) {
			const parsedCart: Cart = JSON.parse(cart)
			const filteredCart = parsedCart.filter(product => product.id !== productId)

			await AsyncStorage.setItem('@liven-cart', JSON.stringify(filteredCart))
			
			setCart(filteredCart)
		}
	};

	async function deleteCart() {
		await AsyncStorage.removeItem('@liven-cart');
        setCart([])
	};

	return (
		<CartContext.Provider value={{ cart, updateCart, deleteCart, deleteItem, updateQuantity }}>
			{children}
		</CartContext.Provider>
	);
};
