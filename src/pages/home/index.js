//importação do styles da pagina
import { Container, Title } from './styles';

//importação dos components
import CusButton from '../../components/Button/index';

export default function HomeScreen({ navigation }) {
    return (
        <Container>
            <Title>Calculadora de Salario</Title>
            <CusButton title="Dias Trabalhados" onPress={() => navigation.navigate('Teste1')} />
            <CusButton title="Por Horas Trabalhadas" onPress={() => navigation.navigate('Teste2')} />
        </Container>
    );
}

