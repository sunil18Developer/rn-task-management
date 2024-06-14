import React from 'react';
import {Text, TextProps} from 'react-native';

interface IProps extends TextProps {
  size?: number;
  color?: string;
  weight?: 'bold' | 'normal';
}

const TextComponent: React.FC<IProps> = (props: IProps) => {
  const {size, color, weight, style} = props;
  return (
    <Text
      {...props}
      style={[
        {
          fontSize: size || 16,
          color: color || 'black',
          fontWeight: weight || 'normal',
        },
        style,
      ]}
      numberOfLines={1}
      ellipsizeMode="tail">
      {props.children}
    </Text>
  );
};

export default TextComponent;
