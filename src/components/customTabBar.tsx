import React, { type ComponentProps } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { styles } from '../styles/customTabBarStyle';

type CustomTabBarProps = Parameters<
  NonNullable<ComponentProps<typeof Tabs>['tabBar']>
>[0];

const TAB_VISUALS: Record<
  string,
  { fallbackLabel: string; icon: keyof typeof Feather.glyphMap }
> = {
  'home/page': { fallbackLabel: 'Início', icon: 'home' },
  'map/page': { fallbackLabel: 'Roteiro IA', icon: 'cpu' },
  'perfil/page': { fallbackLabel: 'Perfil', icon: 'user' },
};

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: CustomTabBarProps) {

  const insets = useSafeAreaInsets();

  const bottomSpacing = Math.max(insets.bottom, 12);

  return (
    <View style={[styles.wrapper, { paddingBottom: bottomSpacing }]}
        pointerEvents="box-none"
    >
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const visual = TAB_VISUALS[route.name];
          if (!visual) return null;

          const { options } = descriptors[route.key];
          const label =
            typeof options.tabBarLabel === 'string'
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : visual.fallbackLabel;

          const isFocused = state.index === index;
          const isAiTab = route.name === 'ai/page';

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          if (isAiTab) {
            return (
              <TouchableOpacity
                key={route.key}   
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel ?? label}
                testID={options.tabBarButtonTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[styles.aiButton, isFocused && styles.aiButtonActive]}
              >
                <Feather name={visual.icon} size={24} color="#0F172A" />
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel ?? label}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton}
            >
              <Feather
                name={visual.icon}
                size={22}
                color={isFocused ? '#4DB6AC' : '#2B3831'}
              />
              <Text style={[styles.label, isFocused && styles.labelActive]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}