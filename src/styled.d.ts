import 'styled-components/native'


declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
        primary: string;
        white: string;
        black: string;
        gray: string;
        red: string;
    };
    borderRadius: string;
    fontSizes: {
        small: string;
        medium: string;
        large: string;
        xl: string;
    };
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    padding: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    margin: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    borderRadius: {
        small: string;
        medium: string;
        large: string;
    };
  }
}