import styled from 'styled-components/native';

import colors from '../../helpers/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

export const Content = styled.ScrollView`
  width: 100%;
  max-width: 90%;
  height: 90%;
`;
