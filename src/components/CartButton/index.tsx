import { FontAwesome5 } from '@expo/vector-icons';
import { Container, QuantityContainer, QuantityText, } from './styles';

export default function CartButton() {
    return (
        <Container>
            <QuantityContainer>
                <QuantityText>9+</QuantityText>
            </QuantityContainer>
            
            <FontAwesome5 name="shopping-cart" size={24} color="black" />
        </Container>
    )
}