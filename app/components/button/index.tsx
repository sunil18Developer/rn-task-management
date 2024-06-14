import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface IProps extends TouchableOpacityProps {}

const Button: React.FC<IProps> = (props: any) => {
  return <TouchableOpacity {...props}>{props?.children}</TouchableOpacity>;
};

export default Button;
