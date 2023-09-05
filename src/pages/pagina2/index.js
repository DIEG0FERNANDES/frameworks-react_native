import { useState } from 'react';

import { Container, Title } from './styles';

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
    <Container>
      <Title>Salário por Horas Trabalhadas</Title>
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
      <Title>O valor a ser ganho é de {st} por horas trabalhadas </Title>
    </Container>
  );
}