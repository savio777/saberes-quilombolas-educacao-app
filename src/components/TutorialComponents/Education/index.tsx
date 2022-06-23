import React from "react";
import { useNavigation } from "@react-navigation/native";

import ContainerKeyboardAvoidingView from "../../ContainerKeyboardAvoidingView";
import EducationImageSvg from "../../../assets/education.svg";
import ButtonNext from "../../ButtonNext";
import { Text, Container, ContainerNext } from "../styles";
import { textLoremIpsum } from "../../../helpers/utils";
import Indicators from "../../Indicators";

export default function Education() {
  const { navigate } = useNavigation();

  return (
    <ContainerKeyboardAvoidingView>
      <Container>
        <EducationImageSvg width="80%" height={300} fill="black" />
        <Text>{textLoremIpsum}</Text>
        <ContainerNext>
          <ButtonNext onPress={() => navigate("Pencil")} />
          <Indicators arrayLenght={[null, null, null]} selected={2} />
        </ContainerNext>
      </Container>
    </ContainerKeyboardAvoidingView>
  );
}
