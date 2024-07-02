import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    color: '#202020',
    alignItems: 'center',
    justifyContent: 'space-beetwen',
    borderRadius: '10px',
    width: 300,
    height: 150,
    boxShadow: '5px 5px 10px rgba(255,127,80, 0.3)',
    marginBottom:'1rem',
    border: 'solid 2px #FF7F50',
  },
  image: {
    height: 150,
    width: '40%',
    borderEndStartRadius: '10px',
    borderStartStartRadius: '10px',
  },
  info: {
    width: '60%',
    padding: '1rem',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF7F50',
    padding: 2,
    width: 35,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    borderRadius: 100,
  },
  nome:{
    textAlign: "start",
  },
  preco: {
    color: '#32CD32',
    fontSize: 16,
  },
});