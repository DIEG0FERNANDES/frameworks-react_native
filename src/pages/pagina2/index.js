import { useState } from 'react';

import { ContainerPagedois, PagedoisTitle } from './styles';

// importação de inputs e botoes
import CusButton from '../../components/Button/index';
import CusInput from '../../components/Input/index';

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
    <ContainerPagedois>
      <PagedoisTitle>Salário por Horas Trabalhadas</PagedoisTitle>
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
      <PagedoisTitle>O valor a ser ganho é de {st} por horas trabalhadas </PagedoisTitle>
    </ContainerPagedois>
  );
}