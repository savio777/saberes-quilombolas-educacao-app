import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ImageLeft = styled.Image`
  height: 100%;
  width: 30%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ContentRight = styled.View`
  background-color: white;
  width: 70%;
  padding: 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Text = styled.Text`
  font-size: 15px;
  color: black;
`;

export const Title = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: flex-end;
  margin-top: 5px;
`;

export const TextButton = styled(Text)`
  color: blue;
`;
