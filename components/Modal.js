import { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles/ModalStyles';
import { addItem } from './CarrinhoFunctions';

export const ModalCustom = ({ nome, preco, path }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(preco * quantidade);

  const handleAddItem = () => {
    // Verifica se todas as variáveis necessárias estão definidas
    if (nome && quantidade && total) {
      addItem({
        id: 23,
        nome: nome,
        quantidade: quantidade,
        total: total,
        preco: preco
      });
      setModalVisible(false);
      // Limpa os campos ou fecha o modal, se aplicável
    } else {
      console.error(
        'Erro: Verifique se nome, quantidade e total estão definidos corretamente.'
      );
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.info}>
              <Text style={styles.modalText}>{nome}</Text>
              <Text style={styles.preco}>R$ {preco},00</Text>
              <View style={styles.quantidade}>
                <TouchableOpacity>
                  <Pressable
                    style={[styles.button, styles.buttonClose, styles.modalBuy]}
                    onPress={() => {
                      if (quantidade > 1) {
                        setQuantidade(quantidade - 1);
                        setTotal(total - preco);
                      }
                    }}>
                    <Feather name="minus" color={'#fff'} size={'1rem'} />
                  </Pressable>
                </TouchableOpacity>
                {quantidade}
                <TouchableOpacity>
                  <Pressable
                    style={[styles.button, styles.buttonClose, styles.modalBuy]}
                    onPress={() => {
                      setQuantidade(quantidade + 1);
                      setTotal(total + preco);
                    }}>
                    <Feather name="plus" color={'#fff'} size={'1rem'} />
                  </Pressable>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.total}>Total R$ {total},00</Text>
            <View style={styles.modalClose}>
              <TouchableOpacity>
                <Pressable
                  style={[styles.button, styles.buttonClose, styles.modalBuy]}
                  onPress={() => {
                    handleAddItem();
                  }}>
                  <Feather name="shopping-cart" color={'#fff'} size={'1rem'} />
                  Adicionar ao carrinho
                </Pressable>
              </TouchableOpacity>
              <TouchableOpacity>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(false)}>
                  <Feather name="x" color={'#fff'} size={'1rem'} />
                  Cancelar
                </Pressable>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Feather name="plus" color={'#fff'} size={'1rem'} />
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};
