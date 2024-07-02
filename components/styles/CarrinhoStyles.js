import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quantidadeAdd: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#32CD32',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#fff',
    border: 'solid 3px #FF7F50',
    paddingBottom: 20,
    paddingRight: 15,
    paddingTop: 20,
    paddingLeft: 15,
    marginVertical: 8,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  quantidade: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FF7F50',
  },
  image: {
    width: 40,
    height: 40,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#F08080',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
  buy:{
    marginBottom: 10,
    backgroundColor: '#32CD32',
  }
});