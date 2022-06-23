import styled from "styled-components/native";

export const ViewRow = styled.View`
  flex-direction: row;
`;

export const ViewFlex = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 28px;
  text-align: center;
  font-family: Roboto;
  margin-bottom: 10px;
`;

export const SubTitle = styled(Title)`
  font-size: 20px;
  margin-bottom: 20px;
`;
