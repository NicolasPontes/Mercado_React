import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  imagePerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    border: '3px solid  black'
  },
  buttonContainer: {
    backgroundColor: 'rgb(255,104,104)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caixaTexto:{
    width: '80%',
    background: 'linear-gradient(to right,rgba(255,104,104,1) , rgba(	250,128,114,1) )',
    borderRadius: 5,
    margin: 5,
    border: '1px solid  black',
    padding: 3,
  },
  nome:{
    fontSize: 15
  },
  cpf:{
    fontSize: 15
  },
  email:{
    fontSize: 15
  },
  nota:{
    fontSize: 17,
    fontWeight: 'bold',
  },
  tituloTextoInfo:{
    fontSize: 17,
    fontWeight: 'bold',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});