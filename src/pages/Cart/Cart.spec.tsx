import { screen } from '@testing-library/react-native'
import { render } from "../../../__tests__/utils/customRender"
import { Cart as CartComponent } from './'
import { Cart } from '../../contexts/CartContext';

let mockedCart: Cart = []

jest.mock('../../hooks/useCart', () => ({
    useCart: () => ({
        cart: mockedCart,
        updateCart: jest.fn(),
        updateQuantity: jest.fn(),
        deleteCart: jest.fn(),
        deleteItem: jest.fn(),
    }),
}));

describe("Screen: Cart", () => {
    const createTestProps = (props: Object) => ({
        navigation: {
          navigate: jest.fn()
        },
        ...props
    });
    const props: any = createTestProps({});
    
    it("should show empty cart message", async () => {
        render(<CartComponent {...props} />);

        expect(screen.getByText("Your cart is empty")).toBeTruthy();
    })

    it("should verify total value of cart", async () => {
        mockedCart = [
            {
                id: 1,
                title: "Title 1",
                price: 10.50,
                category: "Category 1",
                description: "Description 1",
                image: "Image Url 1",
                rating: {
                  rate: 1,
                  count: 1
                }, quantity: 1},
            {
                id: 2,
                title: "Title 2",
                price: 20.10,
                category: "Category 2",
                description: "Description 2",
                image: "Image Url 2",
                rating: {
                  rate: 2,
                  count: 2
                }, quantity: 3}
        ]

        render(<CartComponent {...props} />);

        expect(screen.getByText("Title 1")).toBeTruthy();
        expect(screen.getByText("Title 2")).toBeTruthy();

        expect(screen.getByText("$70.80")).toBeTruthy();
    })
})