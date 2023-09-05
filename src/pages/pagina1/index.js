import { useState } from 'react';

// importação de styles
import { Containerp1, Titlep1 } from './styles';

// importação components
import CusButton from '../../components/Button/index';
import CusInput from '../../components/Input/index';

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
        <Containerp1>
            <Titlep1>Salario por Dias Trabalhados</Titlep1>
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
            <Titlep1>O valor a ser ganho sera de {st}</Titlep1>
        </Containerp1>
    )
}