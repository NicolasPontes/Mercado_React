import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

//telas
import Index from '../components/Index';
import Lista from '../components/Lista';
import Carrinho from '../components/Carrinho';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
     screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#fff', // Cor do ícone ativo (selecionado)
          tabBarInactiveTintColor: '#FF7F90', // Cor do ícone inativo (não selecionado)
          tabBarStyle: {
            backgroundColor: '#FF5733',
            padding: 30, // Cor de fundo da barra de navegação
          },
        })}
      >
      <Tab.Screen
        name="Lista"
        component={Lista}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="fruit-watermelon"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: 'Alimentos',
        }}
      />

      <Tab.Screen
        name="Info1"
        component={Carrinho}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" color={color} size={size} />
          ),
          tabBarLabel: 'Carrinho',
        }}
      />
    </Tab.Navigator>
  );
}
