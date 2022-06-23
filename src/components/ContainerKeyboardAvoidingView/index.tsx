import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import BackgroundGradient from "../BackgroundGradient";
import { KeyboardAvoidingView } from "./styles";

const ContainerKeyboardAvoidingView: React.FC = ({ children }) => (
  <KeyboardAvoidingView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <BackgroundGradient>{children}</BackgroundGradient>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default ContainerKeyboardAvoidingView;
