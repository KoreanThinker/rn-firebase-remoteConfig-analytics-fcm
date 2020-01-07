import React from 'react';
import Screen from './src/screens'
import codePush, { CodePushOptions } from "react-native-code-push";

let codePushOptions: CodePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

const App = () => {
  return (
    <>
      <Screen />
    </>
  );
};

export default codePush(codePushOptions)(App);
