import React, { createContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types/product';

type CartProduct = Product & {
	quantity: number
}

export type Cart = CartProduct[]

export interface CartContextType {
  getCart: () => Promise<Cart>;
  updateCart: (product: Product) => Promise<void>;
  deleteCart: () => Promise<void>;
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
			const productIndex = parsedCart.findIndex(product => product.id)
			console.log('productIndex', productIndex)
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

  async function deleteCart() {
    await AsyncStorage.removeItem('@liven-cart');
  };

  return (
    <CartContext.Provider value={{ getCart, updateCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};
