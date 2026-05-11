import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
      >
        {/* Ícone */}
        <View style={styles.iconWrapper}>
          <View style={styles.iconBox}>
            <Text style={styles.iconHeart}>♥</Text>
          </View>
        </View>

        {/* Título */}
        <Text style={styles.title}>Match de Interesses</Text>
        <Text style={styles.subtitle}>
          Conecte-se com pessoas que combinam com você
        </Text>

        {/* Campo Email */}
        <View style={styles.inputWrapper}>
          <Text style={styles.inputIcon}>✉</Text>
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Campo Senha */}
        <View style={styles.inputWrapper}>
          <Text style={styles.inputIcon}>🔒</Text>
          <TextInput
            style={styles.input}
            placeholder="Sua senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        {/* Botão Entrar */}
        <TouchableOpacity
          style={styles.btnEntrar}
          activeOpacity={0.85}
          onPress={() => router.push('/discover' as any)}
        >
          <Text style={styles.btnEntrarIcon}>✦</Text>
          <Text style={styles.btnEntrarText}>Entrar</Text>
        </TouchableOpacity>

        {/* Botão Criar Conta */}
        <TouchableOpacity style={styles.btnCriar} activeOpacity={0.85}>
          <Text style={styles.btnCriarText}>Criar conta</Text>
        </TouchableOpacity>

        {/* Recuperar Senha */}
        <View style={styles.recuperarWrapper}>
          <Text style={styles.recuperarText}>Esqueceu sua senha? </Text>
          <TouchableOpacity>
            <Text style={styles.recuperarLink}>Recuperar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const PURPLE = '#7C5CFC';
const BG = '#EFF0FF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  iconWrapper: {
    marginBottom: 20,
  },
  iconBox: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: PURPLE,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  iconHeart: {
    fontSize: 36,
    color: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1a1a2e',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b6b8d',
    textAlign: 'center',
    marginBottom: 36,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  inputIcon: {
    fontSize: 18,
    marginRight: 10,
    color: '#aaa',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#1a1a2e',
  },
  btnEntrar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: PURPLE,
    marginTop: 8,
    marginBottom: 12,
    shadowColor: PURPLE,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  btnEntrarIcon: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
  btnEntrarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  btnCriar: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  btnCriarText: {
    color: '#1a1a2e',
    fontSize: 16,
    fontWeight: '700',
  },
  recuperarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recuperarText: {
    fontSize: 14,
    color: '#6b6b8d',
  },
  recuperarLink: {
    fontSize: 14,
    color: PURPLE,
    fontWeight: '700',
  },
});
