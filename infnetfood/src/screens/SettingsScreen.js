import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
} from 'react-native';

export default function SettingsScreen({ isDarkTheme, onToggleTheme }) {
  const colors = isDarkTheme
    ? {
        background: '#121212',
        card: '#1f1f1f',
        text: '#ffffff',
        secondaryText: '#cccccc',
        border: '#333333',
      }
    : {
        background: '#ffffff',
        card: '#f8f8f8',
        text: '#222222',
        secondaryText: '#555555',
        border: '#dddddd',
      };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Configurações</Text>
      <Text style={[styles.subtitle, { color: colors.secondaryText }]}>
        Preferências do aplicativo
      </Text>

      <View
        style={[
          styles.card,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
          },
        ]}
      >
        <View style={styles.row}>
          <View>
            <Text style={[styles.label, { color: colors.text }]}>
              Tema escuro
            </Text>
            <Text style={[styles.description, { color: colors.secondaryText }]}>
              Ative para usar o aplicativo em modo escuro
            </Text>
          </View>

          <Switch value={isDarkTheme} onValueChange={onToggleTheme} />
        </View>

        <View
          style={[
            styles.previewBox,
            {
              backgroundColor: isDarkTheme ? '#2a2a2a' : '#ffffff',
              borderColor: colors.border,
            },
          ]}
        >
          <Text style={[styles.previewText, { color: colors.text }]}>
            Tema atual: {isDarkTheme ? 'Escuro' : 'Claro'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    width: 220,
  },
  previewBox: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
  },
  previewText: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});