import { FontAwesome5 } from '@expo/vector-icons';
import { Container, QuantityContainer, QuantityText, } from './styles';
import { useCart } from '../../hooks/useCart';
import { useEffect, useState } from 'react';

interface CartButtonProps {
    navigate: () => void
}

export default function CartButton({ navigate }: CartButtonProps) {
    const [cartQuantity, setCartQuantity] = useState("0")
    const { cart } = useCart()

    useEffect(() => {
        async function fetchCartQuantity() {
          const itemsQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
          setCartQuantity(itemsQuantity <= 9 ? String(itemsQuantity) : '9+');
        }
    
        fetchCartQuantity();
      }, [cart]);

    return (
        <Container onPress={navigate}>
            <QuantityContainer>
                <QuantityText>
                    {cartQuantity}
                </QuantityText>
            </QuantityContainer>
            
            <FontAwesome5 name="shopping-cart" size={24} color="black" />
        </Container>
    )
}