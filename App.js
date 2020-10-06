import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, PatientScreen, AddPatientScreen, AddAppointmentScreen, PatientsScreen } from './screens';

const Stack = createStackNavigator();

function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator
     initialRouteName="Home"
     >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={HomeScreen.navigationOptions}
      />
      <Stack.Screen
        name="Patient"
        component={PatientScreen}
        options={PatientScreen.navigationOptions}
      />
      <Stack.Screen
        name="AddPatient"
        component={AddPatientScreen}
        options={AddPatientScreen.navigationOptions}
      />
      <Stack.Screen
        name="AddAppointment"
        component={AddAppointmentScreen}
        options={AddAppointmentScreen.navigationOptions}
      />
      <Stack.Screen
        name="Patients"
        component={PatientsScreen}
        options={PatientsScreen.navigationOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
