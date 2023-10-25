import styled from "styled-components/native"

export const Container = styled.TouchableOpacity`
    width: 45%;
    align-items: center;
    box-shadow: 0px 1px 2.22px rgba(0, 0, 0, 0.22);
    background-color: ${props => props.theme.colors.white};
    padding-top: ${props => props.theme.padding.sm};
`

export const Picture = styled.Image`
    width: 100px;
    aspect-ratio: 1;
    flex: 1;
`

export const TextContainer = styled.View`
    align-items: center;
    gap: 4px;
    padding: ${props => props.theme.padding.sm} ${props => props.theme.padding.sm} ${props => props.theme.padding.xs};
`

export const Title = styled.Text`
    font-size: ${props => props.theme.fontSizes.small};
`

export const Price = styled.Text`
    font-size: ${props => props.theme.fontSizes.medium};
`