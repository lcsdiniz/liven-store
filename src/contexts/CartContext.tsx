import React, { createContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types/product';

export type CartProduct = Product & {
	quantity: number
}

export type Cart = CartProduct[]

export interface CartContextType {
  getCart: () => Promise<Cart>;
  updateCart: (product: Product) => Promise<void>;
  deleteCart: () => Promise<void>;
  deleteItem: (productId: number) => Promise<CartProduct[] | undefined>;
  updateQuantity: (productId: number, newQuantity: number) => Promise<CartProduct[] | undefined>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  async function getCart() {
	const cart = await AsyncStorage.getItem('@liven-cart')

	if(cart) {
		const parsedCart: Cart = JSON.parse(cart)
		return parsedCart
	}

	return []
  };

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
	} else if(!cart) {
		await AsyncStorage.setItem('@liven-cart', JSON.stringify([
			{...product, quantity: 1 }
		]))
	}
  };

  async function updateQuantity(productId: number, newQuantity: number) {
	const cart = await AsyncStorage.getItem('@liven-cart')

	if(cart) {
		const parsedCart: Cart = JSON.parse(cart)

		const productIndex = parsedCart.findIndex(arrProduct => arrProduct.id == productId)
		parsedCart[productIndex].quantity = parsedCart[productIndex].quantity + newQuantity

		await AsyncStorage.setItem('@liven-cart', JSON.stringify(parsedCart))

		return parsedCart
	}
  };

  async function deleteItem(productId: number) {
	const cart = await AsyncStorage.getItem('@liven-cart')

	if(cart) {
		const parsedCart: Cart = JSON.parse(cart)
		const filteredCart = parsedCart.filter(product => product.id !== productId)

		await AsyncStorage.setItem('@liven-cart', JSON.stringify(filteredCart))
		
		return filteredCart
	}
  };

  async function deleteCart() {
    await AsyncStorage.removeItem('@liven-cart');
  };

  return (
    <CartContext.Provider value={{ getCart, updateCart, deleteCart, deleteItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
