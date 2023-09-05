import { View } from 'react-native';

// importação do styles
import { ButtonContainer, ButtonTitle } from './styles';

export default function CusButton(props) {
  return (
    <View>
      <ButtonContainer onPress={props.onPress}>
        <ButtonTitle>{props.title}</ButtonTitle>
      </ButtonContainer>
    </View>
  );
}
