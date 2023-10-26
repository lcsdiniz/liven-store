import styled from "styled-components/native"

export const Container = styled.View`
    flex-direction: row;
    background-color: ${props => props.theme.colors.white};
`

export const Content = styled.View`
    flex: 1;
    gap: 16px;
    flex-direction: row;
    padding: ${props => props.theme.padding.md};
`

export const Picture = styled.Image`
    width: 70px;
    height: 70px;
`

export const Info = styled.View`
    gap: 8px;
    flex: 1;
`

export const Title = styled.Text`
    font-size: ${props => props.theme.fontSizes.small};
`

export const Price = styled.Text`
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 500;
`

export const QuantityContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Quantity = styled.Text`
    text-align: center;
    width: 36px;
`

export const QuantityButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.gray};
    padding: ${props => props.theme.padding.sm};
    opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`

export const DeleteButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: ${props => props.theme.padding.lg};
`

