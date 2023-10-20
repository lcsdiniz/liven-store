import styled from "styled-components/native"

export const Container = styled.TouchableOpacity`
    width: 40%;
    align-items: center;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: 0px 1px 2.22px rgba(0, 0, 0, 0.22);
    background-color: ${props => props.theme.colors.white};
`

export const Picture = styled.Image`
    width: 100;
    height: 100;
`

export const TextContainer = styled.View`
    align-items: center;
    gap: 4px;
    padding: ${props => props.theme.padding.sm} ${props => props.theme.padding.sm} ${props => props.theme.padding.md};
`

export const Title = styled.Text`
    font-size: ${props => props.theme.fontSizes.small};
`

export const Price = styled.Text`
    font-size: ${props => props.theme.fontSizes.medium};
`