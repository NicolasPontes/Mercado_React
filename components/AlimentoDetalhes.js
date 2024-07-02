import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import {ModalCustom} from './Modal'

const AlimentoDetalhes = ({ route }) => {
  const { nome, path, preco } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image style={styles.image} source={path} />
        <View style={styles.info}>
            <Text>{nome}</Text>
            <Text style={styles.preco}>R$ {preco},00</Text>
            <ModalCustom nome={nome} preco={preco} path={path} />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  safeArea:{
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    display: 'flex',
    color: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '10px',
    padding: 10,
  },
  image: {
    height: 150,
    maxWidth: '100vw',
    borderRadius: 10,
  },
  info: {
    width: '60%',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    fontSize: 20,
  },
  preco: {
    color: '#32CD32',
    fontSize: 16,
  },
});

export default AlimentoDetalhes;
