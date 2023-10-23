import { renderHook, act, RenderHookResult } from '@testing-library/react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartContextType, CartProvider } from './CartContext';
import { useCart } from '../hooks/useCart';
import { Product } from '../types/product';

const product1: Product = {
  id: 1,
  title: "Title 1",
  price: 1,
  category: "Category 1",
  description: "Description 1",
  image: "Image Url 1",
  rating: {
    rate: 1,
    count: 1
  },
};

const product2: Product = {
  id: 2,
  title: "Title 2",
  price: 2,
  category: "Category 2",
  description: "Description 2",
  image: "Image Url 2",
  rating: {
    rate: 2,
    count: 2
  },
};

describe('CartContext', () => {
  let hook: RenderHookResult<CartContextType, unknown>

  beforeEach(async () => {
    hook = renderHook(() => useCart(), { wrapper: CartProvider })
    await act(async () => {
      await hook.result.current.deleteCart();
    });
  })

  it('should add a new product to the cart', async () => {
    await act(async () => {
      await hook.result.current.updateCart(product1);
    });

    expect(hook.result.current.cart).toHaveLength(1);
  });

  it('should increase the product\'s quantity that is already in the cart', async () => {
    await act(async () => {
      await hook.result.current.updateCart(product1);
      await hook.result.current.updateCart(product1);
    });

    const product = hook.result.current.cart.find((product) => product.id === 1);

    expect(product?.quantity).toBe(2);
  });

  it('should delete a product from the cart', async () => {
    await act(async () => {
      await hook.result.current.updateCart(product2);
    });

    await act(async () => {
      await hook.result.current.deleteItem(2);
    });

    expect(hook.result.current.cart).toHaveLength(0);
  });

  it('should delete all products from the cart', async () => {
    await act(async () => {
      await hook.result.current.updateCart(product1);
      await hook.result.current.updateCart(product2);
    });

    await act(async () => {
      await hook.result.current.deleteCart();
    });

    expect(hook.result.current.cart).toHaveLength(0);
  });
});
