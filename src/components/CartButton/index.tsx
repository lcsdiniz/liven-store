import { FontAwesome5 } from '@expo/vector-icons';
import { Container, QuantityContainer, QuantityText, } from './styles';

interface CartButtonProps {
    navigate: () => void
}

export default function CartButton({ navigate }: CartButtonProps) {
    return (
        <Container onPress={navigate}>
            <QuantityContainer>
                <QuantityText>9+</QuantityText>
            </QuantityContainer>
            
            <FontAwesome5 name="shopping-cart" size={24} color="black" />
        </Container>
    )
}