import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import Text from '../text';
import {styles} from './styles';
import {colors} from '../../utils/colors';

interface IProps extends TextInputProps {
  errorMessage?: string;
  label?: string;
}

const TextInputComponent: React.FC<IProps> = (props: any) => {
  const {errorMessage, label} = props;
  return (
    <View style={styles.container}>
      <Text size={14} weight="bold">
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={{}} {...props} />
      </View>
      {errorMessage && (
        <Text size={14} color={colors.red}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default TextInputComponent;
