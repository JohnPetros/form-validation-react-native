// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

const Page1 = ({ navigation }) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [address, setAddress] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [errorYearMsg, setErrorYearMsg] = useState('');
  const [errorCpfMsg, setErrorCpfMsg] = useState('');
  const [errorRgMsg, setErrorRgMsg] = useState('');

  const handleFormSubmit = () => {
    if (
      (name === '' || year === '' || address === '' || cpf === '' || rg === '')
    ) {
      Alert.alert('Alerta', 'Nenhum campo pode estar vazio!');
      return;
    }

    if (year.length < 4) {
      setErrorYearMsg('Ano não pode ter menos de 4 dígitos');
      return;
    } else {
      setErrorYearMsg('');
    }
    if (cpf.length < 14) {
      setErrorCpfMsg('CPF não pode ter menos de 11 dígitos');
      return;
    } else {
      setErrorCpfMsg('');
    }
    if (rg.length < 10) {
      setErrorRgMsg('RG não pode ter menos de 8 dígitos');
      return;
    } else {
      setErrorRgMsg('');
    }

    navigation.navigate('SecondPage', {
      name: name,
      msg: 'Informações Enviadas',
      year: year,
      address: address,
      cpf: cpf,
      rg: rg,
    });

  };

  const handleNameChange = (name) => {
    name = name.replace(/[^a-zA-Z\u00C0-\u00FF ]+/i, '');
    setName(name);
  };

  const handleYearChange = (year) => {
    year = year.replace(/[^0-9]/g, '');
    setYear(year);
  };

  const handleAddressChange = (address) => {
    setAddress(address);
  };

  const handleCpfChange = (cpf) => {
    const formatedCpf = cpf
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2');
    setCpf(formatedCpf);
  };

  const handleRgChange = (rg) => {
    const formatedRg = rg
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2');
    setRg(formatedRg);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2D5B4F' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.heading}>
            {' '}
            Por favor, preencha as informações
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              value={name}
              onChangeText={handleNameChange}
              placeholder={'Nome completo'}
              style={styles.inputStyle}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={[styles.label, errorYearMsg && { color: '#F74722' }]}>
              Ano de nascimento:
            </Text>
            <TextInput
              value={year}
              onChangeText={handleYearChange}
              placeholder={'yyyy'}
              keyboardType={'numeric'}
              style={[styles.inputStyle, errorYearMsg && styles.inputError]}
              maxLength={4}
            />
          </View>
          {errorYearMsg && <Text style={styles.errorMsg}>{errorYearMsg}</Text>}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Endereço:</Text>
            <TextInput
              value={address}
              onChangeText={handleAddressChange}
              placeholder={'Rua, número, bairro'}
              style={styles.inputStyle}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={[styles.label, errorCpfMsg && { color: '#F74722' }]}>
              CPF:
            </Text>
            <TextInput
              value={cpf}
              onChangeText={handleCpfChange}
              keyboardType={'numeric'}
              placeholder={'xxx.xxx.xxx-xx'}
              style={[styles.inputStyle, errorCpfMsg && styles.inputError]}
              maxLength={14}
            />
          </View>
          {errorCpfMsg && <Text style={styles.errorMsg}>{errorCpfMsg}</Text>}

          <View style={styles.inputContainer}>
            <Text style={[styles.label, errorRgMsg && { color: '#F74722' }]}>
              RG:
            </Text>
            <TextInput
              value={rg}
              onChangeText={handleRgChange}
              keyboardType={'numeric'}
              placeholder={'xx.xxx.xxx'}
              style={[
                styles.inputStyle,
                errorRgMsg && styles.inputError,
                { marginBottom: 20 },
              ]}
              maxLength={10}
            />
          </View>
          {errorRgMsg && <Text style={styles.errorMsg}>{errorRgMsg}</Text>}

          {/* On click of the button we will send the data as a Json
          From here to the Second Screen using navigation */}
          <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Page1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 25,
    color: '#AFDDC2',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  label: {
    color: '#AFDDC2',
    fontSize: 18,
  },
  inputContainer: {
    width: '90%',
    fontSize: 15,
  },
  inputStyle: {
    width: '100%',
    height: 50,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#AFDDC2',
  },
  inputError: {
    borderWidth: 1,
    borderColor: '#F74722',
  },
  button: {
    marginTop: 15,
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
  errorMsg: {
    fontWeight: 'bold',
    color: '#F74722',
  },
});
