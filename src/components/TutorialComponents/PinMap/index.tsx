import React from "react";
import { useNavigation } from "@react-navigation/native";

import ContainerKeyboardAvoidingView from "../../ContainerKeyboardAvoidingView";
import PinImageSvg from "../../../assets/pin-maps.svg";
import ButtonNext from "../../ButtonNext";
import { Text, Container,ContainerNext } from "../styles";
import { textLoremIpsum } from "../../../helpers/utils";
import Indicators from "../../Indicators";

export default function PinMap() {
  const { navigate } = useNavigation();

  return (
    <ContainerKeyboardAvoidingView>
      <Container>
        <PinImageSvg width="80%" height={300} fill="black" />
        <Text>{textLoremIpsum}</Text>
        <ContainerNext>
          <ButtonNext onPress={() => navigate("Education")} />
          <Indicators arrayLenght={[null, null, null]} selected={1} />
        </ContainerNext>
      </Container>
    </ContainerKeyboardAvoidingView>
  );
}
