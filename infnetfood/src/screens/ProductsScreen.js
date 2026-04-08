import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { products } from '../services/mockData.js';

export default function ProductsScreen({ route, navigation }) {
  const { category } = route.params;

  const filteredProducts = products.filter(
    (item) => item.category === category
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <Text style={styles.subtitle}>{category}</Text>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('Detalhes', { product: item })}
          >
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>
              R$ {item.price.toFixed(2)}
            </Text>
          </TouchableOpacity>
        )}
      />
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
  listContent: {
    paddingBottom: 16,
  },
  productCard: {
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  productName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  productDescription: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#d62828',
    fontWeight: 'bold',
  },
});