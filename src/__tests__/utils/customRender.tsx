import { ReactElement, ReactNode } from "react";
import { RenderOptions, render } from "@testing-library/react-native";
import theme from "../../theme/theme";
import { ThemeProvider } from "styled-components/native";
import { CartProvider } from "../../contexts/CartContext";
import { FilterProvider } from "../../contexts/FilterContext";

function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <FilterProvider>
          {children}
        </FilterProvider>
      </CartProvider>
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react-native'
export { customRender as render, Providers }