import { Platform } from "react-native";
import styled from "styled-components/native";

export const ContainerContent = styled.View`
  justify-content: space-between;
`;

export const Content = styled.View`
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs(() => ({
  behavior: Platform.OS === "ios" ? "padding" : "height",
}))`
  flex: 1;
`;
