import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrdersScreen from '../screens/OrdersScreen';
import MapScreen from '../screens/MapScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleToggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: isDarkTheme ? '#1f1f1f' : '#ffffff',
          },
          headerTintColor: isDarkTheme ? '#ffffff' : '#000000',
          contentStyle: {
            backgroundColor: isDarkTheme ? '#121212' : '#ffffff',
          },
        }}
      >
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" options={{ title: 'Home' }}>
              {(props) => (
                <HomeScreen
                  {...props}
                  onLogout={handleLogout}
                  isDarkTheme={isDarkTheme}
                />
              )}
            </Stack.Screen>

            <Stack.Screen
              name="Produtos"
              component={ProductsScreen}
              options={{ title: 'Produtos' }}
            />

            <Stack.Screen
              name="Detalhes"
              component={ProductDetailsScreen}
              options={{ title: 'Detalhes do Produto' }}
            />

            <Stack.Screen
              name="Carrinho"
              component={CartScreen}
              options={{ title: 'Carrinho' }}
            />

            <Stack.Screen
              name="Perfil"
              component={ProfileScreen}
              options={{ title: 'Perfil' }}
            />

            <Stack.Screen
              name="Pedidos"
              component={OrdersScreen}
              options={{ title: 'Pedidos' }}
            />

            <Stack.Screen
              name="Mapa"
              component={MapScreen}
              options={{ title: 'Mapa' }}
            />

            <Stack.Screen
              name="DetalhesRestaurante"
              component={RestaurantDetailsScreen}
              options={{ title: 'Restaurante' }}
            />

            <Stack.Screen
              name="Checkout"
              component={CheckoutScreen}
              options={{ title: 'Checkout' }}
            />

            <Stack.Screen name="Configuracoes" options={{ title: 'Configurações' }}>
              {(props) => (
                <SettingsScreen
                  {...props}
                  isDarkTheme={isDarkTheme}
                  onToggleTheme={handleToggleTheme}
                />
              )}
            </Stack.Screen>
          </>
        ) : (
          <Stack.Screen name="Login" options={{ title: 'Login' }}>
            {(props) => (
              <LoginScreen
                {...props}
                onLogin={handleLogin}
                isDarkTheme={isDarkTheme}
              />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}