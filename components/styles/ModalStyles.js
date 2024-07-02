import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#FF7F50',
  },
  buttonClose: {
    backgroundColor: '#F08080',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
    padding:10,
    borderRadius: 5,
    color: '#fff', 
    fontWeight: 'bold',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Inter'

  },
  modalClose:{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: 5,
  },
  modalBuy:{
   backgroundColor: '#FF7F50',
  },
  info:{
    paddingTop: 10,
    marginTop: 10,
  }, 
  preco: {
    color: '#606060',
    fontSize: 16,
    textAlign:'Center', 
    marginBottom: 15,
    fontWeight: 'bold',
    fontFamily: 'Inter'
  },
   total: {
    color: '#32CD32',
    fontSize: 16,
    textAlign:'Center', 
    marginBottom: 15,
    fontWeight: 'bold',
    fontFamily: 'Inter'
  },
  quantidade:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20
  },  
});