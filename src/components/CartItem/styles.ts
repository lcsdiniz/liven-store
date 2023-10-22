import styled from "styled-components/native"

export const Container = styled.View`
    flex-direction: row;
    gap: 24px;
    padding: ${props => props.theme.padding.md};
    background-color: ${props => props.theme.colors.white};
`

export const Picture = styled.Image`
    width: 90px;
    height: 90px;
`

export const Info = styled.View`
    flex: 1;
    gap: 4px;
`

export const Title = styled.Text`
    font-size: ${props => props.theme.fontSizes.small};
`

export const Price = styled.Text`
    font-size: ${props => props.theme.fontSizes.medium};
`

export const QuantityContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Quantity = styled.TextInput`
    padding: ${props => props.theme.padding.sm};
    text-align: center;
    border: 1px solid ${props => props.theme.colors.gray};
    width: 48px;
`

export const QuantityButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.gray};
    padding: ${props => props.theme.padding.sm};
`

