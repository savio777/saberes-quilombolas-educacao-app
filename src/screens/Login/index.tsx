import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '../../AuthHooks/Auth';
import {InputBorder, Button} from '../../components';
import BookImageSvg from '../../assets/book.svg';
import {
  Title,
  TextSignUp,
  TextSignUpUnderlined,
  TextRecoveryPassword,
  ButtonRecoveryPassword,
} from './styles';
import ContainerKeyboardAvoidingView from '../../components/ContainerKeyboardAvoidingView';
import {Content} from '../../components/ContainerKeyboardAvoidingView/styles';

const Login: React.FC = () => {
  const {navigate} = useNavigation();

  const {signIn} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ContainerKeyboardAvoidingView>
      <Content>
        <BookImageSvg width="80%" height={200} fill="black" />
        <Title>Saberes quilombolas{'\n'} e educação</Title>
        <InputBorder
          title="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <InputBorder
          title="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <ButtonRecoveryPassword>
          <TextRecoveryPassword>Recuperar senha</TextRecoveryPassword>
        </ButtonRecoveryPassword>
        <Button text="Entrar" onPress={() => signIn({email, password})} />
      </Content>

      <TouchableOpacity onPress={() => navigate('SignUp')}>
        <TextSignUp>
          Não tem cadastro?{' '}
          <TextSignUpUnderlined>Cadastre-se</TextSignUpUnderlined>
        </TextSignUp>
      </TouchableOpacity>
    </ContainerKeyboardAvoidingView>
  );
};

export default Login;
