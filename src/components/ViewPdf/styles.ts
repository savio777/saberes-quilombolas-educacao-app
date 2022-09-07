import styled from 'styled-components/native';
import Pdf from 'react-native-pdf';

export const Container = styled.View`
  flex: 1;
  background-color: gray;
  padding: 4px;
`;

export const PdfStyled = styled(Pdf)`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0 6px 0;
`;

export const Title = styled.Text`
  font-weight: bold;
`;

export const ButtonClose = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.5);
`;
