import React from 'react';
import {View} from 'react-native';
import {Button, FlatList, Loader, ScreenHeader, Text} from '../../components';
import {useTaskList} from './hooks';
import {styles} from './styles';
import {colors} from '../../utils/colors';
import TaskCard from './task-card';

const TaskList = () => {
  const {tasks, handleCreateTask, isLoading} = useTaskList();
  return (
    <>
      <ScreenHeader title="Task Management" onCreatePress={handleCreateTask} />
      {isLoading && (
        <View style={styles.loadingContainer}>
          <Loader size="large" color={colors.blue} />
        </View>
      )}
      {tasks?.length === 0 && !isLoading && (
        <View style={styles.notFoundContainer}>
          <Text size={14} weight="bold">
            No Task Found
          </Text>
          <Button style={styles.createTaskButton} onPress={handleCreateTask}>
            <Text size={16} weight="normal" color={colors.brown}>
              Create Task
            </Text>
          </Button>
        </View>
      )}
      {tasks?.length > 0 && (
        <FlatList data={tasks} renderItem={item => <TaskCard item={item} />} />
      )}
    </>
  );
};

export default TaskList;
