import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';
import Stack from './src/navigation/Stack';
import { CartProvider } from './src/contexts/CartContext';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <StatusBar
          animated={true}
          barStyle="dark-content"
        />
        <Stack />
      </CartProvider>
    </ThemeProvider>
  );
}
