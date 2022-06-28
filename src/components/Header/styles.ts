import styled, {css} from 'styled-components/native';

import colors from '../../helpers/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
  max-height: 90px;
  min-height: 50px;
`;

export const Content = styled.View`
  flex-direction: row;
  flex: 1;
  min-width: 90%;
  max-width: 90%;
`;

export const ContainerFlex = styled.View<{principal?: boolean}>`
  height: 100%;
  justify-content: center;

  ${props =>
    props.principal
      ? css`
          width: 80%;
        `
      : css`
          width: 20%;
          flex-direction: row;
          align-items: center;
        `}
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-weight: bold;
  font-size: 18px;
`;
