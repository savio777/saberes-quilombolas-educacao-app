import styled, {css} from 'styled-components/native';

import colors from '../../helpers/colors';

export const Container = styled.View`
  padding: 10px;
`;

export const TabBarContainer = styled.View`
  background-color: ${colors.gray};
  flex-direction: row;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 1;
  border-radius: 22px;
  padding: 5px 20px 5px 20px;
`;

const setPosition = (side: 'left' | 'right' | 'center') => {
  switch (side) {
    case 'center':
      return css`
        align-items: center;
        justify-content: center;
      `;
    case 'left':
      return css`
        align-items: flex-start;
        justify-content: center;
      `;
    case 'right':
      return css`
        align-items: flex-end;
        justify-content: center;
      `;
  }
};

interface PropsButton {
  position: 'left' | 'right' | 'center';
}

export const ButtonNavigation = styled.TouchableOpacity<PropsButton>`
  flex: 1;
  ${props => setPosition(props.position)}
`;

export const TextTabBarCustomized = styled.Text<{isFocused?: boolean}>`
  color: #000000;
  font-size: 12px;
  font-weight: ${props => (props.isFocused ? 'bold' : '600')};
  font-family: Roboto;
`;
