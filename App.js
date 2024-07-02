import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './routes/index'; // Verifique se o caminho está correto para suas rotas
import { styleSplash } from './components/styles/splashStyles'; // Verifique o caminho e a exportação dos estilos

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showButton1, setShowButton1] = useState(false);

  useEffect(() => {
    async function prepare() {

        setShowButton(true);
        setAppIsReady(true);
        setTimeout(()=>{
          setShowButton1(true)
        },3000)
        
    }

    prepare();
  }, []);

  useEffect(() => {
    async function hideSplashScreen() {
      if (appIsReady) {
        await SplashScreen.hideAsync();
      }
    }

    hideSplashScreen();
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  // Exibe a SplashScreen com o botão que aparece após 3 segundos
  if (showButton) {
    return (
      <View style={styleSplash.containerSplash}>
        <Image
          style={styleSplash.imgSplash}
          source={require('./assets/imgs/mercado.png')}
        />
        <Text style={styleSplash.text_SplashScreen}>Average Store</Text>
        {
           showButton1 &&
              <Text style={styleSplash.buttonSplash} onPress={() => setShowButton(false)}>
                Entrar
              </Text>
        }
      
      </View>
    );
  }else{
    return <Routes styles={styles.container} />;
  }

  // Quando o botão é pressionado, exibe as rotas principais
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Altere esta cor para a cor de fundo desejada
    justifyContent: 'center',
    alignItems: 'center',
  },
});
