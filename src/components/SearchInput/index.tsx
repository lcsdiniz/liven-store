import { TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, CustomInput, IconContainer, InputContainer, } from './styles';

export default function SearchInput({ ...rest }: TextInputProps) {
    return (
        <Container>
            <InputContainer>
                <MaterialCommunityIcons name="magnify" size={24} color="#C7C7CD" />

                <CustomInput
                    placeholder='Product name'
                    autoCorrect={false}
                    {...rest}
                />
            </InputContainer>
        </Container>
    )
}