import { useState } from 'react';

import { Containerp2, Titlep2 } from './styles';

// importação de inputs e botoes
import CusButton from '../../components/Button/index';
import CusInput from '../../components/Input/index';

export default function Page2() {
  const [salaMes, setSalaMes] = useState('');
  const [horasMes, setHorasMes] = useState('');
  const [st, setSt] = useState('');

  // script do calculo
  function porHorasTrabalhados() {
    let st = Number(salaMes) / Number(horasMes);
    setSt(st.toFixed(2));
  }
  return (
    <Containerp2>
      <Titlep2>Salário por Horas Trabalhadas</Titlep2>
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
      <Titlep2>O valor a ser ganho é de {st} por horas trabalhadas </Titlep2>
    </Containerp2>
  );
}