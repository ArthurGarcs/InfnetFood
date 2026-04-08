import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { categories } from '../services/mockData';

export default function HomeScreen({ navigation, onLogout, isDarkTheme }) {
  const colors = isDarkTheme
    ? {
        background: '#121212',
        card: '#1f1f1f',
        text: '#ffffff',
        secondaryText: '#cccccc',
        border: '#333333',
        action: '#2a9d8f',
      }
    : {
        background: '#ffffff',
        card: '#f4f4f4',
        text: '#222222',
        secondaryText: '#555555',
        border: '#dddddd',
        action: '#d62828',
      };

  const renderActionButton = (title, onPress) => (
    <TouchableOpacity
      style={[styles.actionButton, { backgroundColor: colors.action }]}
      onPress={onPress}
    >
      <Text style={styles.actionButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>InfnetFood</Text>
      <Text style={[styles.subtitle, { color: colors.secondaryText }]}>
        Categorias disponíveis
      </Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryCard,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
              },
            ]}
            onPress={() => navigation.navigate('Produtos', { category: item.name })}
          >
            <Text style={[styles.categoryText, { color: colors.text }]}>
              {item.name}
            </Text>
            <Text style={[styles.categoryLink, { color: colors.action }]}>
              Ver produtos
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.actionsArea}>
        {renderActionButton('Ver carrinho', () => navigation.navigate('Carrinho'))}
        {renderActionButton('Ver perfil', () => navigation.navigate('Perfil'))}
        {renderActionButton('Ver pedidos', () => navigation.navigate('Pedidos'))}
        {renderActionButton('Ver mapa', () => navigation.navigate('Mapa'))}
        {renderActionButton('Configurações', () => navigation.navigate('Configuracoes'))}
        {renderActionButton('Sair', onLogout)}
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
  listContent: {
    paddingBottom: 16,
  },
  categoryCard: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 6,
  },
  categoryLink: {
    fontSize: 14,
  },
  actionsArea: {
    marginTop: 8,
  },
  actionButton: {
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});