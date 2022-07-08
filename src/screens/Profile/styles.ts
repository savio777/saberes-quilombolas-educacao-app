import styled from 'styled-components/native';

import colors from '../../helpers/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonContentCenter = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: black;
  text-align: center;
`;

export const TextUnderlined = styled(Text)`
  text-decoration-line: underline;
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;
