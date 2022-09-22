import styled from 'styled-components/native';

export const Container = styled.View`
  min-width: 90%;
  max-width: 95%;
  margin-bottom: 20px;
`;

export const Title = styled.Text<{width?: number}>`
  color: #000;
  margin-left: 5px;
`;

export const Input = styled.TextInput`
  min-width: 100%;
  color: black;

  height: 50px;
  padding: 5px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.9);
  border-radius: 9px;
`;
