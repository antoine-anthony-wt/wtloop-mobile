import { Typography, TypographyProps } from '@rneui/themed';
import { colors } from './colors';

export const typography = (props?: TypographyProps): Typography => {
  const { color, isUnderline, lineHeight, fontWeight } = props ?? {};
  return {
    default: {
      color: color ?? colors.black,
      fontFamily: 'AvenirNext-Regular',
      fontSize: 16,
      fontWeight: fontWeight ?? '500',
      textDecorationLine: isUnderline ? 'underline' : 'none',
      lineHeight,
    },
    heading: {
      color: color ?? colors.black,
      fontFamily: 'AvenirNext-Regular',
      fontSize: 24,
      fontWeight: fontWeight ?? '800',
      textDecorationLine: isUnderline ? 'underline' : 'none',
      lineHeight,
    },
    subheading: {
      color: color ?? colors.black,
      fontFamily: 'AvenirNext-Regular',
      fontSize: 20,
      fontWeight: fontWeight ?? '600',
      textDecorationLine: isUnderline ? 'underline' : 'none',
      lineHeight,
    },
    caption: {
      color: color ?? colors.black,
      fontFamily: 'AvenirNext-Regular',
      fontSize: 14,
      fontWeight: fontWeight ?? '500',
      textDecorationLine: isUnderline ? 'underline' : 'none',
      lineHeight,
    },
  };
};
