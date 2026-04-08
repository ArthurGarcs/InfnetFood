import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import { orders } from '../services/mockData';

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedidos</Text>
      <Text style={styles.subtitle}>Pedidos atuais do usuário</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text style={styles.orderTitle}>Pedido #{item.id}</Text>
            <Text style={styles.orderInfo}>Item: {item.item}</Text>
            <Text style={styles.orderInfo}>Quantidade: {item.quantity}</Text>
            <Text style={styles.orderInfo}>Status: {item.status}</Text>
            <Text style={styles.orderPrice}>Total: R$ {item.total.toFixed(2)}</Text>
          </View>
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
  orderCard: {
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  orderTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  orderInfo: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 4,
  },
  orderPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#d62828',
    marginTop: 6,
  },
});