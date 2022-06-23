import styled from "styled-components/native";

import colors from "../../helpers/colors";

export const Container = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.3);
  min-width: 40%;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${colors.white};
  min-height: 55px;
  padding: 15px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 22px;
  color: #fff;
`;
