import React, { useState } from 'react';
import { View, Text, Button, Slider, Switch, StyleSheet, Picker } from 'react-native';

const App = () => {
  // Estados iniciais
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [nightMode, setNightMode] = useState(false);

  // Função para resetar preferências
  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setNightMode(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações de Preferências</Text>

      {/* Picker de tema */}
      <Text style={styles.label}>Tema</Text>
      <Picker
        selectedValue={theme}
        onValueChange={(itemValue) => setTheme(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

      {/* Slider de tamanho de fonte */}
      <Text style={styles.label}>Tamanho da Fonte: {fontSize}</Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        value={fontSize}
        onValueChange={(value) => setFontSize(Math.round(value))}
      />

      {/* Switch de modo noturno */}
      <Text style={styles.label}>Modo Noturno: {nightMode ? 'Ativado' : 'Desativado'}</Text>
      <Switch
        value={nightMode}
        onValueChange={(value) => setNightMode(value)}
      />

      {/* Botão de Reset */}
      <Button title="Resetar Preferências" onPress={resetPreferences} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  slider: {
    width: '100%',
    height: 40,
  },
});

export default App;
