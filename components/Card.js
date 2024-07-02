import { View, Text, Image,TouchableOpacity  } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles/CardStyles';
import { ModalCustom } from './Modal';

export default function Card({ title, preco, path }) {
  return (
    
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={path}
      />
      <View style={styles.info}>
        <View style={styles.nome}>
          <Text>{title}</Text>
          <Text style={styles.preco}>R$ {preco},00</Text>
        </View>
       
      </View>
    </View>
  );
}
