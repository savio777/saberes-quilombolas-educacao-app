import styled from 'styled-components/native';

export const Content = styled.TouchableOpacity`
  height: 100%;
  width: 80%;
  justify-content: center;
`;

export const Text = styled.Text`
  color: white;
  font-size: 15px;
  text-shadow-color: rgba(0, 0, 0, 0.8);
  text-shadow-offset: {width: -1px, height: 1px};
  text-shadow-radius: 10px;
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 24px;
`;

const getWidthByColor = (type: 'blue' | 'red' | 'purple') => {
  switch (type) {
    case 'red':
      return '100%';
    case 'blue':
      return '95%';
    case 'purple':
      return '90%';
  }
};

export const Container = styled.ImageBackground<{
  type: 'blue' | 'red' | 'purple';
}>`
  width: ${props => getWidthByColor(props.type)};
  height: 100%;
  align-items: center;
  max-height: 200px;
  margin-top: -15px;
`;
