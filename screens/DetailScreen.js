import React from 'react';
import { View, Text, TouchableOpacity, Platform, Alert } from 'react-native';
import styles from '../styles/styles';

export default function DetailScreen({ route }) {
  const { item } = route.params;

  const handleBooking = (time) => {
    const message = `Du har nu booket tid hos ${item.name} kl. ${time}`;

    if (Platform.OS === 'web') {
      window.alert(message); // Browser
    } else {
      Alert.alert("Tid booket", message); // Mobil
    }
  };

  const tider = [
    'Mandag 10:00',
    'Mandag 14:00',
    'Tirsdag 09:00',
    'Onsdag 12:00',
    'Torsdag 16:00',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>{item.role}</Text>
      <Text style={{ marginBottom: 20 }}>{item.desc}</Text>

      <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>Ledige tider:</Text>

      {tider.map((tid, index) => (
        <TouchableOpacity key={index} style={styles.item} onPress={() => handleBooking(tid)}>
          <Text style={styles.name}>{tid}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
