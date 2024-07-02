import { StyleSheet } from 'react-native';

export const styleSplash = StyleSheet.create({
  containerSplash:{
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcfcfc'
  },
  text_SplashScreen:{
    fontSize: 35,
    color: '#FF5733',
    textTransform: 'capitalize',
    marginTop: 10,
    fontWeight: 700,
  },
  imgSplash:{
    width: 200,
    height: 190
  },
  buttonSplash:{
    marginTop: 40,
    width: 200,
    height: 50,
    color: '#FFFFFF',
    backgroundColor: '#FF5733',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 700
    }
});
