import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function RestaurantDetailsScreen({ route }) {
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Restaurante</Text>
      <Text style={styles.subtitle}>{restaurant.name}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.value}>{restaurant.name}</Text>

        <Text style={styles.label}>Categoria</Text>
        <Text style={styles.value}>{restaurant.category}</Text>

        <Text style={styles.label}>Endereço</Text>
        <Text style={styles.value}>{restaurant.address}</Text>

        <Text style={styles.label}>Item do cardápio</Text>
        <Text style={styles.value}>{restaurant.menuItem}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
    padding: 18,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
    color: '#222222',
  },
  value: {
    fontSize: 16,
    color: '#444444',
  },
});