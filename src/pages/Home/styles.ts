import styled from "styled-components/native"

export const Header = styled.View`
    gap: 12px;
    padding: ${props => props.theme.padding.lg} ${props => props.theme.padding.md} 0;

    flex-direction: row;
    align-items: center;
`