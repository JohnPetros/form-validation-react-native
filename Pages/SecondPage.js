// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const SecondPage = ({ navigation, route }) => {

  const [age, setAge] = useState(2022 - parseInt(route.params.year))

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2d5b4f' }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Mensagens Enviadas!</Text>

        <View style={styles.dataContainer}>
          <Text style={styles.textStyle}>Seu nome é: </Text>
          <Text style={styles.data}>{route.params.name}</Text>

          <Text style={styles.textStyle}>Sua ano de nascimento é: </Text>
          <Text style={styles.data}>{route.params.year}</Text>

          <Text style={styles.textStyle}>Sua idade aproximada é: </Text>
          <Text style={styles.data}>{age}</Text>

          <Text style={styles.textStyle}>Seu endereço é:</Text>
          <Text style={styles.data}>{route.params.address}</Text>

          <Text style={styles.textStyle}>Seu CPF é:</Text>
          <Text style={styles.data}>{route.params.cpf}</Text>

          <Text style={styles.textStyle}>Seu RG é: </Text>
          <Text style={styles.data}>{route.params.rg}</Text>
        </View>

        <TouchableOpacity     
          style={styles.button}
          onPress={() => navigation.navigate('FirstPage')}
        >
        <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: 'center', color: 'grey' }}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    color: '#AFDDC2',
    fontWeight: 'bold',

    textAlign: 'center',
    marginVertical: 10,
    padding: 20,
  },
  dataContainer: {
    backgroundColor: '#AFDDC2',
    width: '90%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#2d5b4f',
  },
  data: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    marginTop: 20,
    backgroundColor: '#AFDDC2',
    width: '70%',
    height: 45,
    heading: 50,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
  },
  buttonText: {
     color: '#2D5B4F',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
