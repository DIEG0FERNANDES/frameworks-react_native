import { View, Text } from 'react-native';
import { useState } from 'react';

//importação do sttyles da pagina
import HomeStyles from '../styles/HomescreenStyle';

// importação de inputs e botoes
import CusButton from '../components/Button/index';
import CusInput from '../components/Input/index';

export default function Page1() {
  const [salaMes, setSalaMes] = useState("");
  const [diaMes, setDiaMes] = useState("");
  const [diaTrab, setDiaTrab] = useState("");
  const [st, setSt] = useState("");

  function porDiasTrabalhados() {
    let st = Number(salaMes) / Number(diaMes) * Number(diaTrab);
    setSt(st.toFixed(2));
  }
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Salario por Dias Trabalhados</Text>
      <CusInput
        title="Salario por Mês"
        value={salaMes}
        onChangeText={setSalaMes}
      />
      <CusInput
        title="Dias do Mês"
        value={diaMes}
        onChangeText={setDiaMes}
      />
      <CusInput
        title="Dias Trabalhados"
        value={diaTrab}
        onChangeText={setDiaTrab}
      />
      <CusButton title="Calcular" onPress={() => porDiasTrabalhados()} />
      <Text>O valor a ser ganho sera de {st} </Text>
    </View>
  );
}
