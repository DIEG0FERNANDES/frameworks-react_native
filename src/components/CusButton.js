import { View, TouchableOpacity, Text } from 'react-native';

// importação do styles
import {StyledButton, TitleButton} from '../styles/CusButtonStyle'

export default function CusButton(props) {
  return (
    <View>
      <StyledButton onPress={props.onPress}>
        <TitleButton>{props.title}</TitleButton>
      </StyledButton>
      {/* <TouchableOpacity style={StylesCus.button} onPress={props.onPress}>
        <Text style={StylesCus.buttonTitle}>{props.title}</Text>
      </TouchableOpacity> */}
    </View>
  );
}
