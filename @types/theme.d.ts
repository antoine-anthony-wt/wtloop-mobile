import '@rneui/themed';

declare module '@rneui/themed' {
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

  export interface CreateThemeOptions {
    radius?: Size;
    typography: (props?: TypographyProps) => Typography;
  }

  export interface Theme {
    radius: Radius = {};
    typography: (props?: TypographyProps) => Typography;
  }
}
