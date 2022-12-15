import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: { backgroundColor: '#AFDDC2' },
          headerTintColor: "#2d5b4f",
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ title: 'Formulário' }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{ title: 'Dados Envidados' }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
