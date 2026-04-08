import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useCart } from '../context/CartContext';
import { checkoutMockData } from '../services/mockData';
import {
  requestNotificationPermission,
  scheduleOrderStatusNotifications,
} from '../services/notificationService';
import { fetchAddressByCep } from '../services/cepService';

export default function CheckoutScreen() {
  const { cart } = useCart();
  const [cep, setCep] = useState(checkoutMockData.cep);
  const [address, setAddress] = useState(checkoutMockData.address);
  const [paymentMethod, setPaymentMethod] = useState(checkoutMockData.paymentMethod);
  const [errorMessage, setErrorMessage] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isLoadingCep, setIsLoadingCep] = useState(false);

  const feedbackOpacity = useRef(new Animated.Value(0)).current;
  const feedbackScale = useRef(new Animated.Value(0.9)).current;

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleSearchCep = async () => {
    try {
      setErrorMessage('');
      setIsLoadingCep(true);

      const foundAddress = await fetchAddressByCep(cep);
      setAddress(foundAddress);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoadingCep(false);
    }
  };

  const handleConfirmOrder = async () => {
    if (cep.trim() === '' || address.trim() === '' || paymentMethod.trim() === '') {
      setErrorMessage('Preencha o CEP, o endereço e a forma de pagamento.');
      return;
    }

    setErrorMessage('');
    setShowFeedback(true);

    feedbackOpacity.setValue(0);
    feedbackScale.setValue(0.9);

    Animated.sequence([
      Animated.parallel([
        Animated.timing(feedbackOpacity, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(feedbackScale, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(1000),
      Animated.timing(feedbackOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShowFeedback(false);
    });

    const permissionGranted = await requestNotificationPermission();

    if (permissionGranted) {
      await scheduleOrderStatusNotifications();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.subtitle}>Revise seu pedido</Text>

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
                  Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            )}
            ListFooterComponent={
              <View style={styles.totalArea}>
                <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>
              </View>
            }
          />

          <Text style={styles.label}>CEP</Text>
          <TextInput
            style={styles.input}
            value={cep}
            onChangeText={setCep}
            placeholder="Digite o CEP"
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.cepButton} onPress={handleSearchCep}>
            <Text style={styles.cepButtonText}>
              {isLoadingCep ? 'Buscando CEP...' : 'Buscar CEP'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.label}>Endereço de entrega</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Digite o endereço de entrega"
          />

          <Text style={styles.label}>Forma de pagamento</Text>
          <TextInput
            style={styles.input}
            value={paymentMethod}
            onChangeText={setPaymentMethod}
            placeholder="Digite a forma de pagamento"
          />

          {errorMessage !== '' && (
            <Text style={styles.errorText}>{errorMessage}</Text>
          )}

          {showFeedback && (
            <Animated.View
              style={[
                styles.feedbackBox,
                {
                  opacity: feedbackOpacity,
                  transform: [{ scale: feedbackScale }],
                },
              ]}
            >
              <Text style={styles.feedbackText}>Pedido confirmado com sucesso!</Text>
            </Animated.View>
          )}

          <TouchableOpacity
            style={[
              styles.confirmButton,
              showFeedback && styles.confirmButtonSuccess,
            ]}
            onPress={handleConfirmOrder}
          >
            <Text style={styles.confirmButtonText}>Confirmar pedido</Text>
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
    padding: 14,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemInfo: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 2,
  },
  totalArea: {
    marginTop: 4,
    marginBottom: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d62828',
    textAlign: 'right',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  cepButton: {
    backgroundColor: '#457b9d',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  cepButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  feedbackBox: {
    backgroundColor: '#d8f3dc',
    borderWidth: 1,
    borderColor: '#95d5b2',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  feedbackText: {
    color: '#1b4332',
    fontSize: 15,
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: '#d62828',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  confirmButtonSuccess: {
    backgroundColor: '#2a9d8f',
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});