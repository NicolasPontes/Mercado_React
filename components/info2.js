import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { styles } from './styles/MeusDados';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Info2() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imagePerfil}
        source={require('../assets/imgs/fotoPerfil.jpeg')}
      />
      <View style={styles.caixaTexto}>
        <Text style={styles.title}>Meus Dados</Text>
      </View>
      <View style={styles.caixaTexto}>
        <Text style={styles.cpf}>
          <Text style={styles.tituloTextoInfo}>CPF: </Text>
          456.098.876-78
        </Text>
      </View>
      <View style={styles.caixaTexto}>
        <Text style={styles.nome}>
          <Text style={styles.tituloTextoInfo}>Nome: </Text>
          Martha Soarez Almeida
        </Text>
      </View>
      <View style={styles.caixaTexto}>
        <Text style={styles.email}>
          <Text style={styles.tituloTextoInfo}>Email: </Text>
          marthaAlmeida23@gmail.com
        </Text>
      </View>
        <Text style={styles.nota}>Nota: </Text>
        <View style={styles.starsContainer}>
        <Feather name={'star'} color={'yellow'} size={20}/> 
        <Feather name={'star'} color={'yellow'} size={20}/> 
        <Feather name={'star'} color={'yellow'} size={20}/>
        </View>
    </SafeAreaView>
  );
}
