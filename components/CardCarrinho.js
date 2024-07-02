import { View, Text, Image,TouchableOpacity  } from 'react-native';
import { styles } from './styles/CardStyles';

export default function CardCarrinho({ nome, preco, quantidade}) {
  
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.nome}>
          <Text>{nome}</Text>
          <Text>{quantidade}</Text>
          <Text style={styles.preco}>R$ {preco},00</Text>
        </View>
      </View>
    </View>
  );
}
