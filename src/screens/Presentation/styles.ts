import styled from 'styled-components/native';

import colors from '../../helpers/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 17px;
  margin: 10px 0 0 0;
`;

export const ContainerImage = styled.View`
  min-width: 100%;
  align-items: center;
`;

export const ContainerButtonNext = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const Content = styled.ScrollView.attrs(() => ({
  persistentScrollbar: true,
}))`
  background-color: #fff;
  width: 90%;
  height: 100%;
  max-height: 95%;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${colors.black};
  padding: 20px;
  margin-top: 50px;
`;
