import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { restaurants } from '../services/mockData';

export default function MapScreen({ navigation }) {
  const handleOpenRestaurant = (restaurant) => {
    navigation.navigate('DetalhesRestaurante', { restaurant });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa Simulado</Text>
      <Text style={styles.subtitle}>10 restaurantes no Centro do Rio</Text>

      <ImageBackground
        source={require('../../assets/mapa-centro-rio.png')}
        style={styles.mapImage}
        imageStyle={styles.mapImageStyle}
      >
        {restaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            style={[
              styles.marker,
              {
                top: restaurant.mapPosition.top,
                left: restaurant.mapPosition.left,
              },
            ]}
            onPress={() => handleOpenRestaurant(restaurant)}
          >
            <Text style={styles.markerText}>{restaurant.id}</Text>
          </TouchableOpacity>
        ))}
      </ImageBackground>

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.restaurantCard}
            onPress={() => handleOpenRestaurant(item)}
          >
            <Text style={styles.restaurantName}>
              {item.id}. {item.name}
            </Text>
            <Text style={styles.restaurantInfo}>{item.category}</Text>
            <Text style={styles.restaurantInfo}>{item.address}</Text>
            <Text style={styles.restaurantLink}>Ver detalhes</Text>
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
  mapImage: {
    width: '100%',
    height: 260,
    marginBottom: 20,
    overflow: 'hidden',
  },
  mapImageStyle: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  marker: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#d62828',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 16,
  },
  restaurantCard: {
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  restaurantInfo: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 2,
  },
  restaurantLink: {
    fontSize: 14,
    color: '#d62828',
    marginTop: 6,
    fontWeight: '600',
  },
});