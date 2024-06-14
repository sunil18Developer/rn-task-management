import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskDetails from '../../screens/task-details';
import TaskList from '../../screens/task-list';
import {styles} from './styles';
import {ScreenNames} from './route-name';
import TaskCreate from '../../screens/task-create';
import {useAppRoutes} from './hooks';

const Stack = createNativeStackNavigator();

const AppRoute = () => {
  useAppRoutes();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={ScreenNames.TaskList}>
          <Stack.Screen
            name={ScreenNames.TaskDetails}
            component={TaskDetails}
          />
          <Stack.Screen name={ScreenNames.TaskList} component={TaskList} />
          <Stack.Screen name={ScreenNames.TaskCreate} component={TaskCreate} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppRoute;
