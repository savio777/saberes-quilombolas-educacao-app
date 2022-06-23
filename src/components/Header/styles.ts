import styled, {css} from 'styled-components/native';

import colors from '../../helpers/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
  max-height: 80px;
  min-height: 50px;

  padding-bottom: 10px;
`;

export const Content = styled.View`
  flex-direction: row;
  flex: 1;
  min-width: 90%;
  max-width: 90%;
`;

export const ContainerFlex = styled.View<{principal?: boolean}>`
  flex: 1;

  ${props =>
    props.principal
      ? css`
          width: 100%;
          max-width: 80%;
          justify-content: flex-end;
        `
      : css`
          width: 100%;
          max-width: 20%;
          flex-direction: row;
          align-items: flex-end;
        `}
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-weight: bold;
  font-size: 18px;
`;
