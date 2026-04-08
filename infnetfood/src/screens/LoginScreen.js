import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function LoginScreen({ onLogin, isDarkTheme }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const colors = isDarkTheme
    ? {
        background: '#121212',
        text: '#ffffff',
        secondaryText: '#cccccc',
        input: '#1f1f1f',
        border: '#333333',
        button: '#2a9d8f',
      }
    : {
        background: '#ffffff',
        text: '#222222',
        secondaryText: '#555555',
        input: '#f9f9f9',
        border: '#cccccc',
        button: '#d62828',
      };

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('Preencha e-mail e senha para continuar.');
      return;
    }

    setErrorMessage('');
    Alert.alert('Login realizado', 'Acesso liberado com sucesso.');
    onLogin();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>InfnetFood</Text>
      <Text style={[styles.subtitle, { color: colors.secondaryText }]}>
        Tela de Login
      </Text>

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: colors.input,
            borderColor: colors.border,
            color: colors.text,
          },
        ]}
        placeholder="Digite seu e-mail"
        placeholderTextColor={colors.secondaryText}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: colors.input,
            borderColor: colors.border,
            color: colors.text,
          },
        ]}
        placeholder="Digite sua senha"
        placeholderTextColor={colors.secondaryText}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {errorMessage !== '' && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}

      <TouchableOpacity
        style={[styles.loginButton, { backgroundColor: colors.button }]}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  loginButton: {
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});