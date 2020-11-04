import React from 'react';
import {
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigation } from './src/Navigation/navigation'
import { QuestionContext } from './src/store/AppContext'


const App = () => {


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <QuestionContext>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </QuestionContext>
    </>
  );
};

export default App;
