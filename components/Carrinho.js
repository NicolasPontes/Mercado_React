import { useEffect, useState } from 'react';
import {
  Pressable,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { retrieveData, clearData } from './CarrinhoFunctions';
import { Feather } from '@expo/vector-icons';
import {styles} from './styles/CarrinhoStyles'

export default function Carrinho() {
  const [items, setItems] = useState([]);
  const [totalGeral, setTotalGeral] = useState(0);
  const [tot, setTot] = useState(0);
  const [qtd, setQtd] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await retrieveData();
        console.log('Dados recuperados:', data); // Verifique os dados recuperados
        setItems(JSON.parse(data));
      } catch (error) {
        console.error('Erro ao recuperar dados:', error);
      }
    };
    const getTotalGeral = () => {
      let totalGeralCalculado = 0;
      for (const item of items) {
        totalGeralCalculado += item.total;
      }
      setTotalGeral(totalGeralCalculado);
    };

    fetchData();
    getTotalGeral();
  }, []);

  useEffect(() => {
    const getTotalGeral = () => {
      let totalGeralCalculado = 0;
      for (const item of items) {
        totalGeralCalculado += item.total;
      }
      setTotalGeral(totalGeralCalculado);
    };
    getTotalGeral();
  }, [items]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.total}>Total: R$ {totalGeral},00</Text>
        <Text style={styles.title}>Lista de Itens:</Text>
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <View>
                  <Text style={styles.nome}>Nome: {item.nome}</Text>
                  <Text style={styles.quantidade}>
                    Quantidade: {item.quantidade}x
                  </Text>
                  <Text style={styles.nome}>Preço: R$ {item.preco},00</Text>
                </View>
                <View style={styles.quantidadeAdd}>
                  <TouchableOpacity>
                    <Pressable
                      style={[
                        styles.button,
                        styles.buttonClose,
                        styles.modalBuy,
                      ]}
                      onPress={() => {
                        setQtd(item.quantidade);
                        if (item.quantidade > 1) {
                          setQtd((item.quantidade -= 1));
                          setTotalGeral(totalGeral - item.preco);
                        }
                      }}>
                      <Feather name="minus" color={'#fff'} size={'1rem'} />
                    </Pressable>
                  </TouchableOpacity>
                  <Text>{item.quantidade}</Text>
                  <TouchableOpacity>
                    <Pressable
                      style={[
                        styles.button,
                        styles.buttonClose,
                        styles.modalBuy,
                      ]}
                      onPress={() => {
                        setQtd((item.quantidade += 1));
                        setTotalGeral(totalGeral + item.preco);
                      }}>
                      <Feather name="plus" color={'#fff'} size={'1rem'} />
                    </Pressable>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
         <TouchableOpacity>
          <Pressable
            style={[styles.button, styles.buttonClose, styles.modalBuy, styles.buy]}
            onPress={async () => {
              await clearData()
            }}>
            <Feather name="check" color={'#fff'} size={'1rem'} />
            <Text>Finalizar compra</Text>
          </Pressable>
        </TouchableOpacity>
         <TouchableOpacity>
          <Pressable
            style={[styles.button, styles.buttonClose, styles.modalBuy]}
            onPress={async () => {
              await clearData()
            }}>
            <Feather name="trash-2" color={'#fff'} size={'1rem'} />
            <Text>Esvaziar lixeira</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

