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

export const SubTitle = styled.Text`
  color: black;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: #232323;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Image = styled.Image`
  width: 150px;
  height: 145px;
  border-radius: 10px;
  margin-right: 15px;
`;

export const Divider = styled.View`
  width: 100%;
  border-width: 1px;
  border-color: #ccc;
  margin: 15px 0 15px;
`;
