import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '..';
import {styles} from './styles';

interface IProps {
  title?: string;
  onCreatePress?: () => void;
  onBackPress?: () => void;
  onDeletePress?: () => void;
}

const ScreenHeader: React.FC<IProps> = (props: any) => {
  const {title, onCreatePress, onBackPress, onDeletePress} = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftSideContainer}>
        {onBackPress && (
          <Button style={styles.item} onPress={onBackPress}>
            <Text size={14} weight="bold">
              Back
            </Text>
          </Button>
        )}
        {title && (
          <Text size={16} weight="bold">
            {title}
          </Text>
        )}
      </View>
      {onCreatePress && (
        <Button style={styles.item} onPress={onCreatePress}>
          <Text size={14} weight="bold">
            create
          </Text>
        </Button>
      )}
      {onDeletePress && (
        <Button style={styles.item} onPress={onDeletePress}>
          <Text size={14} weight="bold">
            Delete
          </Text>
        </Button>
      )}
    </View>
  );
};

export default ScreenHeader;
