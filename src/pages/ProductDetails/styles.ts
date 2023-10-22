import styled from "styled-components/native"

export const Container = styled.View`
    gap: 16px;
`

export const PictureContainer = styled.View`
    align-items: center;
`

export const Picture = styled.Image`
    width: 80%;
    aspect-ratio: 1;
`

export const InfoContainer = styled.View`
    background-color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.padding.md};
    gap: 8px;
`

export const InfoTitle = styled.Text`
    font-size: ${props => props.theme.fontSizes.small};
`

export const Title = styled.Text`
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 500;
`

export const Price = styled.Text`
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: 600;
`

export const RateContainer = styled.View`
    align-items: center;
    flex-direction: row;
    gap: 2px;
`

export const Rate = styled.Text`
`

export const Description = styled.Text`
    font-size: ${props => props.theme.fontSizes.medium};
`

export const Divider = styled.View`
    height: 2px;
    background-color: ${props => props.theme.colors.gray};
`