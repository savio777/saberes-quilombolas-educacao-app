import styled from 'styled-components/native';

import colors from '../../helpers/colors';

/*import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(props => ({
  colors: ['#DAE4E9', '#ccc', 'rgba(0,0,0,0.7)'],
}))`
  flex: 1;
`;
*/

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;
