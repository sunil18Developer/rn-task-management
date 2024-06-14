import React from 'react';
import {View} from 'react-native';
import {Card, ScreenHeader, Text} from '../../components';
import {useTaskDetails} from './hooks';
import {styles} from './styles';

const TaskDetails = (props: any) => {
  const {item, handleDeletePress, handleGoback} = useTaskDetails(props);
  return (
    <>
      <ScreenHeader
        onBackPress={handleGoback}
        onDeletePress={handleDeletePress}
      />
      <Card style={styles.mainContainer}>
        <Text size={24} weight="bold">
          Task Details
        </Text>
        <View style={styles.container}>
          <Text size={14} weight="bold">
            Title:
          </Text>
          <Text size={14} weight="bold">
            {item.title}
          </Text>
        </View>
        <View style={styles.container}>
          <Text size={14} weight="bold">
            Description:
          </Text>
          <Text size={14} weight="bold">
            {item.description ? item.description : '-'}
          </Text>
        </View>
        <View style={styles.container}>
          <Text size={14} weight="bold">
            Due Date:
          </Text>
          <Text size={14} weight="bold">
            {item.dueDate ? item.dueDate : '-'}
          </Text>
        </View>
      </Card>
    </>
  );
};

export default TaskDetails;
