import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/styles';

export default function DetailScreen({ route }) {
  const { item } = route.params;

  const handleBooking = () => {
    Alert.alert('Tid booket', `Du har nu booket tid hos ${item.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>{item.role}</Text>
      <Text style={{ marginBottom: 20 }}>{item.desc}</Text>

      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Book tid</Text>
      </TouchableOpacity>
    </View>
  );
}
