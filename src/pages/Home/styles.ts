import styled from "styled-components/native"

export const Container = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 12px;
`

export const Header = styled.View`
    gap: 12px;
    padding: ${props => props.theme.padding.lg} ${props => props.theme.padding.md} 0;

    flex-direction: row;
    align-items: center;
`