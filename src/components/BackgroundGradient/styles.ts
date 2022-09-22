import styled from 'styled-components/native';

import colors from '../../helpers/colors';

import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs(() => ({
  colors: [colors.gradient.dark, colors.gradient.medium, colors.gradient.light],
}))`
  flex: 1;
`;
