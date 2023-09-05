import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importações das paginas
import {HomeScreen} from "./src/pages/home/index";
import {Page1} from './src/pages/pagina1/index';
import {Page2} from './src/pages/pagina2/index';

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
