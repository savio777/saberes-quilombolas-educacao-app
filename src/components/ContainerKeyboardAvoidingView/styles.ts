import {Platform, ScrollViewProps} from 'react-native';
import styled from 'styled-components/native';

export const ContainerContent = styled.View`
  justify-content: space-between;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs(() => ({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
}))`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
} as ScrollViewProps)`
  width: 100%;
  height: 100%;
  padding: 20px;
`;
