import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';
import Stack from './src/navigation/Stack';
import { CartProvider } from './src/contexts/CartContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Stack />
      </CartProvider>
    </ThemeProvider>
  );
}
