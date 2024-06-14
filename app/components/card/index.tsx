import React from 'react';
import {View, ViewProps} from 'react-native';
import {styles} from './styles';

interface IProps extends ViewProps {
  children: React.ReactNode;
}

const Card: React.FC<IProps> = ({children, ...props}) => (
  <View {...props} style={[styles.card, props?.style]}>
    {children}
  </View>
);

export default Card;
