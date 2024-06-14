import React from 'react';
import {View} from 'react-native';
import {Button, ScreenHeader, Text, TextInput} from '../../components';
import {useTaskCreate} from './hooks';
import {styles} from './styles';

const TaskCreate = () => {
  const {
    task,
    handleCreate,
    handleDescription,
    handleDueDate,
    handleTitle,
    handleGoback,
  } = useTaskCreate();
  return (
    <>
      <ScreenHeader onBackPress={handleGoback} />
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text size={24} weight="bold">
            Task Create
          </Text>
        </View>
        <TextInput
          label="Title"
          value={task?.title}
          onChangeText={handleTitle}
          errorMessage={task?.titleError ? task?.titleError : ''}
          placeholder="Title"
          autoFocus
        />
        <TextInput
          label="Description"
          value={task?.description}
          onChangeText={handleDescription}
          placeholder="Description"
          numberOfLines={5}
          multiline={true}
        />
        <TextInput
          label="Due Date"
          value={task?.dueDate}
          onChangeText={handleDueDate}
          placeholder="Due Date"
        />
        <Button style={styles.buttonContainer} onPress={handleCreate}>
          <Text size={16} weight="bold" color="white">
            Submit
          </Text>
        </Button>
      </View>
    </>
  );
};

export default TaskCreate;
