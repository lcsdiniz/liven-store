import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: ${props => props.theme.padding.md};
  gap: 8px;
`;

export const Filter = styled.View`
  gap: 8px;
`;

export const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 600;
  text-align: center;
`;

export const Name = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;
`;


export const Row = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CategoryItem = styled.TouchableOpacity`
  margin: 3px;
  border-width: 1.5px;
  padding: 5px;
`;

export const CategoryName = styled.Text`
  text-transform: capitalize;
`;