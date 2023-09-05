import { useState } from 'react';

// importação de styles
import { Container, Title } from './styles';

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
        <Container>
            <Title>Salario por Dias Trabalhados</Title>
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
            <Title>O valor a ser ganho sera de {st}</Title>
        </Container>
    )
}