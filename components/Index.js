import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>oiii</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
