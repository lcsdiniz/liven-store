import { FontAwesome5 } from '@expo/vector-icons';
import { Container } from './styles';

interface FilterButtonProps {
    openDrawer: () => void
}

export default function FilterButton({ openDrawer }: FilterButtonProps) {
    return (
        <Container onPress={openDrawer}>          
            <FontAwesome5 name="filter" size={22} color="black" />
        </Container>
    )
}