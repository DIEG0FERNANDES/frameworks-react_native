import { View, Text } from 'react-native';

//importação do styles da pagina
import { HomeContainer, HomeTitle } from './styles';

//importação dos components
import CusButton from '../../components/Button/index';

export default function HomeScreen({ navigation }) {
    return (
        <HomeContainer>
            <HomeTitle>Calculadora de Salario</HomeTitle>
            <CusButton title="Dias Trabalhados" onPress={() => navigation.navigate('Teste1')} />
            <CusButton title="Por Horas Trabalhadas" onPress={() => navigation.navigate('Teste2')} />
        </HomeContainer>
    );
}

