import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import DrawerRoutes from './drawer.routes';

export default function Routes() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <DrawerRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Altere esta cor para a cor de fundo desejada
  },
});