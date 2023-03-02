import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BagIcon, TicketIcon, UserIcon } from '~assets/images/icons';
import { TripBanner } from '../trip-banner/TripBanner';
import { useTheme } from '@rneui/themed';
import useStyles from './TabBar.styles';

const TAB_BAR_HEIGHT = 48;
const ITEM_SIZE = 22;

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const bottomSafeArea = useSafeAreaInsets().bottom;
  const tabBarHeight = TAB_BAR_HEIGHT + bottomSafeArea;
  const { theme } = useTheme();
  const styles = useStyles();

  const renderIcon = (index: number, color?: string) => {
    switch (index) {
      case 0:
        return (
          <TicketIcon width={ITEM_SIZE} height={ITEM_SIZE} color={color} />
        );
      case 1:
        return <BagIcon width={ITEM_SIZE} height={ITEM_SIZE} color={color} />;
      case 2:
        return <UserIcon width={ITEM_SIZE} height={ITEM_SIZE} color={color} />;
      default:
        break;
    }
  };

  return (
    <View>
      <TripBanner
        onPress={() => console.log('on press trip banner')}
        onPressQR={() => console.log('on press qr code')}
      />
      <View style={[styles.container, { height: tabBarHeight }]}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          const color = isFocused ? theme.colors.black : theme.colors.grey0;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View key={index} style={styles.itemContainer}>
              <Pressable onPress={index === 0 ? onPress : undefined}>
                <View style={styles.item}>
                  {renderIcon(index, color)}
                  <Text style={[styles.itemText, { color }]}>{label}</Text>
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
};
