import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  TabBarContainer,
  TextTabBarCustomized,
  ButtonNavigation,
} from "./styles";

const getIconName = (titleScreen: string | undefined) => {
  switch (titleScreen) {
    case "Início":
      return "home";
    case "Salvos":
      return "bookmark-check";
    case "Perfil":
      return "account";
  }
};

const showScreenOnTabBar = (titleScreen: string | undefined) => {
  switch (titleScreen) {
    case "Início":
      return true;
    case "Salvos":
      return true;
    case "Perfil":
      return true;
    default:
      false;
  }
};

const switchPosition = (index: number) => {
  switch (index) {
    case 0:
      return "left";
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "center";
  }
};

const TabBarCustomized: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => (
  <Container>
    <TabBarContainer>
      {state.routes.map((route, index) => {
        const { title } = descriptors[route.key].options;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <>
            {showScreenOnTabBar(title) && (
              <ButtonNavigation
                onPress={onPress}
                key={String(index)}
                position={switchPosition(index)}
              >
                <MaterialCommunityIcons
                  name={getIconName(title)}
                  size={25}
                  color={isFocused ? "rgba(0,0,0,0.9)" : "#595959"}
                />
                <TextTabBarCustomized>{title}</TextTabBarCustomized>
              </ButtonNavigation>
            )}
          </>
        );
      })}
    </TabBarContainer>
  </Container>
);

export default TabBarCustomized;
