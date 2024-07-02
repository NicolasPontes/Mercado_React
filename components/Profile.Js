
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles/profileStyles';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagePerfil}
        source={require('../assets/imgs/fotoPerfil.jpeg')}
      />
      <Text style={styles.title}>Meu Perfil</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Info2')}
      >
        <Text style={styles.buttonText}>Minhas Informações</Text>
      </TouchableOpacity>
    </View>
  );
}
