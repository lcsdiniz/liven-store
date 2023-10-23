import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';
import Stack from './src/navigation/Stack';
import { CartProvider } from './src/contexts/CartContext';
import { FilterProvider } from './src/contexts/FilterContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <FilterProvider>
          <StatusBar
            animated={true}
            barStyle="dark-content"
          />
          <Stack />
        </FilterProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
