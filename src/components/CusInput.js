import { View, TextInput } from 'react-native';

export default function CusInput(props) {
    return (
        <View>
            <TextInput
                placeholder={props.title}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    );
}
