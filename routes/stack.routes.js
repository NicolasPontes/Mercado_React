import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Profile from '../components/Profile.Js'
import Info2 from '../components/info2'

export default function StackRoutes(){
  return(
  <Stack.Navigator screenOptions={{ title: '' }}>
      <Stack.Screen 
          name = 'Home'
          component={Profile}
      />
      <Stack.Screen 
          name = 'Info2'
          component={Info2}
      />
  </Stack.Navigator>
  )
}