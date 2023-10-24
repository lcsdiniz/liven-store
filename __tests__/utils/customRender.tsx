import { ReactElement, ReactNode } from "react";
import { RenderOptions, render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../../src/theme/theme";
import { CartProvider } from "../../src/contexts/CartContext";
import { FilterProvider } from "../../src/contexts/FilterContext";

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