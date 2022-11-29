import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';
import Shift from './screeno/Shift';
import Available from './screeno/Available';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  // useEffect(() => {
  //   console.log("hello");
  //   axios
  //     .get("http://10.0.2.2:8080/shifts")
  //     .then((res) => {
  //       console.log("hello2");

  //       console.log("then", res.data);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? "light-content" : "dark-content"}
    //     // backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     // style={backgroundStyle}
    //   >
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Shift" component={Shift} />
        <Stack.Screen name="Available" component={Available} />
      </Stack.Navigator>
    </NavigationContainer>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default App;
