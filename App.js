import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ESP8266_IP = 'http://192.168.4.1'; // Cambia esto si tu IP es diferente

const sendCommand = async (direction, action) => {
  try {
    const response = await fetch(`${ESP8266_IP}/${direction}/${action}`);
    const text = await response.text();
    console.log(text);
  } catch (error) {
    Alert.alert('Error', 'No se pudo conectar con el ESP8266');
    console.error(error);
  }
};

const ButtonControl = ({ label, direction }) => {
  return (
      <TouchableOpacity
          style={styles.button}
          onPressIn={() => sendCommand(direction, 'start')}
          onPressOut={() => sendCommand(direction, 'stop')}
      >
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>UA Car</Text>
        <ButtonControl label="↑" direction="up" />
        <View style={styles.row}>
          <ButtonControl label="←" direction="left" />
          <View style={{ width: 20 }} />
          <ButtonControl label="→" direction="right" />
        </View>
        <ButtonControl label="↓" direction="down" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  row: { flexDirection: 'row', marginTop: 10 },
  button: {
    backgroundColor: '#2196F3',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    minWidth: 100,
    alignItems: 'center'
  },
  text: { color: 'white', fontSize: 20 },
  title: { fontSize: 24, marginBottom: 20 }
});
