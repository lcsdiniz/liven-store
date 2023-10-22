import styled from "styled-components/native"

export const Container = styled.View`
    padding-top: 9%;
    gap: 16px;
    flex: 1;
`

export const EmptyCart = styled.View`
    gap: 12px;
    align-items: center;
    justify-content: center;
    flex: 1;
`

export const Message = styled.Text`
    font-size: ${props => props.theme.fontSizes.xl};
`

export const TotalContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    padding: ${props => props.theme.padding.sm} ${props => props.theme.padding.md};
    background-color: ${props => props.theme.colors.white};
`

export const Total = styled.Text`
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 500;
`

export const TotalValue = styled.Text`
    font-size: ${props => props.theme.fontSizes.large};
    font-weight: 600;
`

