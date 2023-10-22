import styled from "styled-components/native"

export const Header = styled.View`
    gap: 12px;
    padding: ${props => props.theme.padding.lg} ${props => props.theme.padding.md} 0;
    flex-direction: row;
    align-items: center;
`

export const NoProductsContainer = styled.View`
    gap: 12px;
    align-items: center;
    justify-content: center;
    flex: 1;
`

export const Message = styled.Text`
    font-size: ${props => props.theme.fontSizes.xl};
`