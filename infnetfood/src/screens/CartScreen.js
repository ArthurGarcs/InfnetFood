import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartScreen({ navigation }) {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      <Text style={styles.subtitle}>Itens selecionados</Text>

      {cart.length === 0 ? (
        <View style={styles.emptyArea}>
          <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
              <View style={styles.itemCard}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemInfo}>Quantidade: {item.quantity}</Text>
                <Text style={styles.itemInfo}>
                  Preço unitário: R$ {item.price.toFixed(2)}
                </Text>
                <Text style={styles.itemSubtotal}>
                  Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            )}
          />

          <View style={styles.totalArea}>
            <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>
          </View>

          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => navigation.navigate('Checkout')}
          >
            <Text style={styles.checkoutButtonText}>Ir para checkout</Text>
          </TouchableOpacity>
        </>
      )}
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
  emptyArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666666',
  },
  listContent: {
    paddingBottom: 16,
  },
  itemCard: {
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  itemName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemInfo: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 4,
  },
  itemSubtotal: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#d62828',
    marginTop: 6,
  },
  totalArea: {
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    paddingTop: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#d62828',
  },
  checkoutButton: {
    backgroundColor: '#d62828',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});