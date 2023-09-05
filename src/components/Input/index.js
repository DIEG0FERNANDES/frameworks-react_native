import { View } from 'react-native';
import { InputText } from './styles';

export default function CusInput(props) {
    return (
        <View>
            <InputText
                placeholder={props.title}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    );
}
