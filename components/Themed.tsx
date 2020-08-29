import * as React from 'react';
import { Text as DefaultText, View as DefaultView, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
// import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  // const theme = useColorScheme();
  const theme = "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const mainStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 10
  },
  inline: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 2,
    alignItems: "center",
  },
  columnInline: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  evently: {
    justifyContent: "space-evenly"
  },
  between: {
    justifyContent: "space-between"
  },
  badge: {
    // width: 45,
    height: 30,
    paddingVertical: 5,
    paddingHorizontal: 15,
    // backgroundColor: Colors.silver,
    borderRadius: 50,
    textAlign: "center",
    fontWeight: "bold"
  }
});
