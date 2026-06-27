import React, { useState } from 'react';
import { Pressable, Text, TextInput, StyleSheet, View } from 'react-native';
import * as Linking from 'expo-linking';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState('');

  const buscaAmazon = () => {
    if (nomeProduto.trim()) {
      const amazonUrl = `https://www.amazon.com.br/s?k=${encodeURIComponent(nomeProduto)}`;
      Linking.openURL(amazonUrl).catch(() => {
        alert('Erro ao abrir o navegador');
      });
    } else {
      alert('Digite o nome do produto');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do produto"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <Pressable style={styles.button} onPress={buscaAmazon}>
        <Text style={styles.text}>Pesquisar na Amazon</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FF9900',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
