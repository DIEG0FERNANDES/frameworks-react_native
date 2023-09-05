import { View, Text  } from 'react-native';

//importação do sttyles da pagina
import HomeStyles from '../styles/HomescreenStyle';

//importação dos components
import CusButton from '../components/CusButton'

export default function HomeScreen({ navigation }) {
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Calculadora de Salario</Text>
      <CusButton title="Dias Trabalhados" onPress={()=> navigation.navigate('Teste1')}/>
      <CusButton title="Por Horas Trabalhadas" onPress={()=> navigation.navigate('Teste2')}/>
    </View>
  );
}
