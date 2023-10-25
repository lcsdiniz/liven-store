import { Platform } from "react-native"
import styled from "styled-components/native"

export const Container = styled.TouchableOpacity`
`

export const QuantityContainer = styled.View`
    background-color: ${props => props.theme.colors.red};
    position: absolute;
    z-index: 1;
    border-radius: 9px;
    right: -5px;
    top: -5px;
    width: 18px;
    height: 18px;
    justify-content: center;
    align-items: center;
`

export const QuantityText = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: ${Platform.OS === 'android' ? '8px' : (props => props.theme.fontSizes.small) };
`

