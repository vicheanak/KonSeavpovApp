import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import {HelloWorld} from '_atoms';

const HomeScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Screen: Home   <HelloWorld name="HOMMIE" />;</Text>
  
    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
      <Text>Go to Home</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => navigation.navigate('Login')}>
      <Text>Go to Login</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default HomeScreen;