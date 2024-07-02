import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para recuperar todos os itens do AsyncStorage

export async function retrieveData() {
  try {
    const storedData = await AsyncStorage.getItem('items');
    if (storedData !== null) {
        return storedData;
    } 

    // Retorna um array vazio se não houver dados armazenados
    return [];
  } catch (error) {
    console.error('Erro ao recuperar dados:', error);
    throw error; // Lança o erro para ser tratado onde a função for chamada
  }
}

// Função para adicionar um novo item ao AsyncStorage
export async function addItem(newItem) {
  try {
    // Recupera os dados do AsyncStorage

    let storedData = await retrieveData();

    // Verifica se os dados recuperados são um array
    if (!Array.isArray(storedData)) {
      storedData = [];
    }

    // Adiciona o novo item ao array
    storedData = [...storedData, newItem];

    // Salva os dados atualizados de volta no AsyncStorage
    await AsyncStorage.setItem('items', JSON.stringify(storedData));
  } catch (error) {
    console.error('Erro ao salvar dados no AsyncStorage:', error);
    throw error; // Lança o erro para ser tratado onde a função for chamada
  }
}

export const clearData = async () => {
  try {
    await AsyncStorage.removeItem('items');
    console.log('Dados removidos com sucesso do AsyncStorage.');
  } catch (error) {
    console.error('Erro ao limpar dados do AsyncStorage:', error);
  }
};
