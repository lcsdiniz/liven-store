import { renderHook, act, RenderHookResult } from '@testing-library/react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartContextType, CartProvider } from './CartContext';
import { useCart } from '../hooks/useCart';
import { ProductMock1, ProductMock2 } from '../__tests__/mocks/products';

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
      await hook.result.current.updateCart(ProductMock1);
    });

    expect(hook.result.current.cart).toHaveLength(1);
  });

  it('should increase the product\'s quantity that is already in the cart', async () => {
    await act(async () => {
      await hook.result.current.updateCart(ProductMock1);
      await hook.result.current.updateCart(ProductMock1);
    });

    const product = hook.result.current.cart.find((product) => product.id === 1);

    expect(product?.quantity).toBe(2);
  });

  it('should delete a product from the cart', async () => {
    await act(async () => {
      await hook.result.current.updateCart(ProductMock2);
    });

    await act(async () => {
      await hook.result.current.deleteItem(2);
    });

    expect(hook.result.current.cart).toHaveLength(0);
  });

  it('should delete all products from the cart', async () => {
    await act(async () => {
      await hook.result.current.updateCart(ProductMock1);
      await hook.result.current.updateCart(ProductMock2);
    });

    await act(async () => {
      await hook.result.current.deleteCart();
    });

    expect(hook.result.current.cart).toHaveLength(0);
  });
});
