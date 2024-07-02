// Lista.js
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image
} from 'react-native';
import Card from './Card'
import { alimentos } from '../assets/Data/mercado.js';
import { createStackNavigator } from '@react-navigation/stack';
import AlimentoDetalhes from './AlimentoDetalhes';

const Stack = createStackNavigator();

const AlimentosLista = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('AlimentoDetalhes', item)}>
      <Card title={item.nome} path={item.path} preco={item.preco}/>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      backgroundColor={'#fff'}
      data={alimentos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    </SafeAreaView>
  );
};

const Lista = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AlimentosLista"
        component={AlimentosLista}
        options={{ title: 'Alimentos' }}
      />
      <Stack.Screen
        name="AlimentoDetalhes"
        component={AlimentoDetalhes}
        options={{ title: 'Detalhes' }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  item: {
    padding: 10,
  },
});

export default Lista;
