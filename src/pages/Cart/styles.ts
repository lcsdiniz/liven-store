import styled from "styled-components/native"

export const Container = styled.View`
    gap: 16px;
    flex: 1;
`

export const Header = styled.View`
    gap: 12px;
    padding: 9% 0 ${props => props.theme.padding.md};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.white};
`

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: ${props => props.theme.padding.md};
    bottom: ${props => props.theme.padding.md}
`

export const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 600;
  text-align: center;
`;

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

