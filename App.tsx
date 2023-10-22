import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';
import Stack from './src/navigation/Stack';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack />
    </ThemeProvider>
  );
}
