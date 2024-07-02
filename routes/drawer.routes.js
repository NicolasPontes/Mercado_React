import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

export default function drawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#FE544C', // Cor do ícone quando selecionado
        drawerInactiveTintColor: '#333', // Cor do ícone quando não selecionado
        title: '',
      }}>
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={'#FE544C'} size={size} />
          ),
          drawerLabel: 'Inicio',
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={'#FE544C'} size={size} />
          ),
          drawerLabel: 'Perfil',
        }}
      />
    </Drawer.Navigator>
  );
}
