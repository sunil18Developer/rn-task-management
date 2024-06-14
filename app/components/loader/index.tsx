import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

interface IProps extends ActivityIndicatorProps {}

const Loader: React.FC<IProps> = (props: IProps) => {
  return <ActivityIndicator {...props} />;
};

export default Loader;
