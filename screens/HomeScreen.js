// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
  const goToYdelser = () => {
    navigation.navigate('Ydelser');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velkommen til Behnadlo</Text>
      <Text style={styles.subtitle}>Find den rette behandler for dig</Text>
      <TouchableOpacity style={styles.button} onPress={goToYdelser}>
        <Text style={styles.buttonText}>Se behandlere</Text>
      </TouchableOpacity>
    </View>
  );
}
