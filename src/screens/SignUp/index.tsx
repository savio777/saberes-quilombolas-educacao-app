import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mask } from "react-native-text-input-mask";

import { InputBorder, Button } from "../../components";
import { Title, SubTitle, ViewFlex, ViewRow } from "./styles";
import ContainerKeyboardAvoidingView from "../../components/ContainerKeyboardAvoidingView";
import { Content } from "../../components/ContainerKeyboardAvoidingView/styles";

const SignUp: React.FC = () => {
  const { goBack } = useNavigation();

  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    const changeValueBirtMask = async () => {
      const valueMasked = await mask("[00]/[00]/[0000]", birthday, false);
      setBirthday(valueMasked);
    };

    changeValueBirtMask();
  }, [birthday]);

  return (
    <ContainerKeyboardAvoidingView>
      <Content>
        <ViewRow>
          <ViewFlex>
            <MaterialCommunityIcons
              name="arrow-left"
              size={25}
              onPress={() => goBack()}
            />
          </ViewFlex>
          <ViewFlex>
            <Title>Cadastrar</Title>
          </ViewFlex>
          <ViewFlex />
        </ViewRow>

        <SubTitle>Cadastre e acesse{"\n"} todo o nosso conteudo</SubTitle>
        <InputBorder title="Nome" />
        <InputBorder title="E-mail" />
        <InputBorder title="Senha" secureTextEntry />
        <InputBorder
          titleWidth={150}
          title="Data de nascimento"
          value={birthday}
          onChangeText={setBirthday}
          keyboardType="number-pad"
        />

        <Button text="Cadastrar" onPress={() => {}} />
      </Content>
    </ContainerKeyboardAvoidingView>
  );
};

export default SignUp;
