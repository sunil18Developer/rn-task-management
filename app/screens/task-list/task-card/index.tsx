import React from 'react';
import {View} from 'react-native';
import {Button, Card, Text} from '../../../components';
import {useTaskCard} from './hooks';
import {styles} from './styles';

interface IProps {
  item: any;
}

const TaskCard: React.FC<IProps> = props => {
  const {item, handleTaskDetails} = useTaskCard(props);
  return (
    <Card>
      <View style={styles.container}>
        <View>
          <Text size={14} weight="bold">
            {item.item.title}
          </Text>
        </View>
        <Button onPress={handleTaskDetails}>
          <Text size={14} weight="bold">
            View
          </Text>
        </Button>
      </View>
    </Card>
  );
};

export default TaskCard;
