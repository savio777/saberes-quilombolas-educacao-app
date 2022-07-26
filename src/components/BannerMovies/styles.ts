import styled from 'styled-components/native';

import colors from '../../helpers/colors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  height: 100%;
  width: 100%;
  align-items: flex-end;
`;

export const Text = styled.Text`
  color: white;
  text-shadow-color: rgba(0, 0, 0, 0.8);
  text-shadow-offset: {width: -1px, height: 1px};
  text-shadow-radius: 10px;
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 17px;
`;

export const ContentLeft = styled.View`
  width: 80%;
`;

export const ContentRight = styled.View`
  width: 20%;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.View`
  background-color: ${colors.gray};
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 60px;
`;

export const Image = styled.ImageBackground.attrs(() => ({borderRadius: 10}))`
  width: 150px;
  height: 145px;
  margin-right: 5px;
  padding: 5px;
`;
