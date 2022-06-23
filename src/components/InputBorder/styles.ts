import styled from 'styled-components/native';

import colors from '../../helpers/colors';

export const Container = styled.View`
  justify-content: center;
  min-width: 90%;
  max-width: 95%;
  height: 50px;
  padding: 5px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.9);
  border-radius: 9px;
  margin-bottom: 20px;
`;

export const Title = styled.Text<{width?: number}>`
  min-width: 40px;
  max-width: ${props => (props.width ? `${props.width}px` : '45px')};
  background-color: ${colors.white};
  color: #000;
  text-align: center;
  margin-top: -15px;
  margin-left: 5px;
`;

export const Input = styled.TextInput`
  min-width: 100%;
  height: 100%;
`;
