import { View, Text } from 'react-native';
import { useState } from 'react';

//importação do sttyles da pagina
import HomeStyles from '../styles/HomescreenStyle';

// importação de inputs e botoes
import CusButton from '../components/CusButton';
import CusInput from '../components/CusInput';

export default function Page2() {
  const [salaMes, setSalaMes] = useState('');
  const [horasMes, setHorasMes] = useState('');
  const [st, setSt] = useState('');

  // const horasPorMes = horasTrabalhadas * 5;
  // (horasTrabalhadas = 44), (valorSalarioMinimo = 1320);
  function porHorasTrabalhados() {
    let st = Number(salaMes) / Number(horasMes);
    setSt(st.toFixed(2));
  }
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Salário por Horas Trabalhadas</Text>
      <CusInput
        title="Salario por Mês"
        value={salaMes}
        onChangeText={setSalaMes}
      />
      <CusInput
        title="Horas por Mês"
        value={horasMes}
        onChangeText={setHorasMes}
      />
      <CusButton title="Calcular" onPress={() => porHorasTrabalhados()} />
      <Text>O valor a ser ganho é de {st} por horas trabalhadas </Text>
    </View>
  );
}
