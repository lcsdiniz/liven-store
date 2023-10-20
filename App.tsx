import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/pages/Home/Home';
import theme from './src/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
