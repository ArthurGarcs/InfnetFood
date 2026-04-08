import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useCart } from '../context/CartContext';

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showFeedback, setShowFeedback] = useState(false);

  const feedbackOpacity = useRef(new Animated.Value(0)).current;
  const feedbackScale = useRef(new Animated.Value(0.9)).current;

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
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
      Animated.delay(900),
      Animated.timing(feedbackOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShowFeedback(false);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.subtitle}>Detalhes do produto</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Descrição</Text>
        <Text style={styles.text}>{product.description}</Text>

        <Text style={styles.label}>Preço</Text>
        <Text style={styles.text}>R$ {product.price.toFixed(2)}</Text>

        <Text style={styles.label}>Quantidade</Text>

        <View style={styles.quantityArea}>
          <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

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
            <Text style={styles.feedbackText}>Item adicionado ao carrinho!</Text>
          </Animated.View>
        )}

        <TouchableOpacity
          style={[
            styles.addButton,
            showFeedback && styles.addButtonSuccess,
          ]}
          onPress={handleAddToCart}
        >
          <Text style={styles.addButtonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
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
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
  },
  text: {
    fontSize: 15,
    color: '#444444',
  },
  quantityArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
  },
  quantityButton: {
    width: 40,
    height: 40,
    backgroundColor: '#d62828',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
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
  addButton: {
    backgroundColor: '#d62828',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  addButtonSuccess: {
    backgroundColor: '#2a9d8f',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});