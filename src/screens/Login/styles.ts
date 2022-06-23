import styled from 'styled-components/native';

export const Title = styled.Text`
  color: #000;
  font-size: 28px;
  text-align: center;
  font-family: Roboto;
  margin-bottom: 10px;
`;

export const ButtonRecoveryPassword = styled.TouchableOpacity`
  width: 95%;
  margin-bottom: 10px;
`;

export const TextRecoveryPassword = styled.Text`
  color: #000;
  text-align: right;
`;

export const TextSignUp = styled.Text`
  color: #000;
  text-align: center;
  font-size: 18px;
`;

export const TextSignUpUnderlined = styled(TextSignUp)`
  text-decoration: underline;
`;
