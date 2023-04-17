import styled from 'styled-components/native';

import colors from '../../helpers/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.ScrollView`
  width: 100%;
  max-width: 90%;
  height: 90%;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: #232323;
  margin-bottom: 20px;
`;
