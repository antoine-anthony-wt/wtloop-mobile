import '@rneui/themed';
import { TextStyle } from 'react-native';

declare module '@rneui/themed' {
  export interface Colors {
    placeholder?: string;
    shadow?: string;
    mint?: string;
    darkMint?: string;
    darkMintSecondary?: string;
  }

  export type Size = {
    xxs?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
  };

  export interface TypographyProps {
    color?: string;
    isUnderline?: boolean;
    lineHeight?: number;
    fontWeight?: TextStyle['fontWeight'];
  }

  export type Typography = {
    default: TextStyle;
    heading: TextStyle;
    subheading: TextStyle;
    caption: TextStyle;
  };

  export interface ThemeSpacing extends Size {}
  export interface Radius extends Size {}

  export interface CreateThemeOptions {
    radius?: Radius;
    typography: (props?: TypographyProps) => Typography;
  }

  export interface Theme {
    radius: Radius;
    typography: (props?: TypographyProps) => Typography;
  }
}
