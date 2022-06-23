import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  height: 100%;
  width: 100%;
  max-height: 200px;
  align-items: center;
  margin-bottom: 15px;
`;

export const Content = styled.TouchableOpacity`
  flex-direction: row;
  height: 98%;
  width: 90%;
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
  font-size: 18px;
`;

export const ContainerLeft = styled.View`
  width: 90%;
`;

export const ContainerRight = styled.View`
  height: 30%;
  width: 10%;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.View`
  background-color: #fff;
  height: 30px;
  width: 100%;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
`;
