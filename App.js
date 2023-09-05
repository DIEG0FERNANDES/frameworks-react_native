import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./src/pages/HomeScreen/index";
import Page1 from './src/pages/Page1';
import Page2 from './src/pages/Page2';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title: 'Página Inicial',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Teste1" component={Page1}
          options={{
            title: "Dias Trabalhados",
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Teste2" component={Page2}
          options={{
            title: "Horas Trabalhadas",
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
