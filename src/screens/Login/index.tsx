import React, {useState} from 'react';
import {Alert, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

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
import {signIn} from '../../store/modules/Auth';

const Login: React.FC = () => {
  const {navigate} = useNavigation();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      dispatch(signIn({email, name: 'Eric Santos (teste)', logged: true}));
    } else {
      Alert.alert('Aviso', 'Digite email e senha');
    }
  };

  return (
    <ContainerKeyboardAvoidingView>
      <ScrollView>
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
            onSubmitEditing={handleLogin}
          />
          <ButtonRecoveryPassword>
            <TextRecoveryPassword>Recuperar senha</TextRecoveryPassword>
          </ButtonRecoveryPassword>
          <Button text="Entrar" onPress={handleLogin} />
        </Content>

        <TouchableOpacity onPress={() => navigate('SignUp')}>
          <TextSignUp>
            Não tem cadastro?{' '}
            <TextSignUpUnderlined>Cadastre-se</TextSignUpUnderlined>
          </TextSignUp>
        </TouchableOpacity>
      </ScrollView>
    </ContainerKeyboardAvoidingView>
  );
};

export default Login;
