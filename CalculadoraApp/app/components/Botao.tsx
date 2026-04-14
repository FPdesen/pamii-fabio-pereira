import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BotaoProps {
  titulo: string;
  corFundo?: string;
  corTexto?: string;
  onPress: () => void;
}

const Botao: React.FC<BotaoProps> = ({ titulo, corFundo = "#f3f3f3", corTexto = "#fff", onPress }) => (
  <TouchableOpacity
    style={[styles.botao, { backgroundColor: corFundo }]}
    onPress={onPress}
  >
    <Text style={[styles.textoBotao, { color: corTexto }]}>{titulo}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  botao: {
    width: 80,
    height: 80,
    color: '#2c2c2e',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 32,
    fontWeight: '400',
  },
});

export default Botao;
