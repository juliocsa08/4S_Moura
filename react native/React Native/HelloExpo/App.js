import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header/header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Header />
            <Text style={styles.texto1} >ANNE RIDICULA, RAW CABEÇA DE BAGRE</Text>
            <Text style={styles.texto2} >MADUDA CABEÇA DE PRIQUITO</Text>
            <StatusBar style="auto" />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "blue",
  },

  container: {
    width: "100%",
    height: "100%",
    borderColor: "red",
    borderWidth: 3,
    borderStyle: "dotted",
    backgroundColor: 'white'
  },

  texto1: {
    color: "red"
  },
  texto2: {
    color: "blue"
  }
})


//   container: {
//     flex: 1,

//     backgroundColor: '#f08f8f',
//     borderWidth: 3,
//     borderStyle: 'solid',
//     borderColor: 'red'
//   },
// });
