import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
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
      <Button title="Book tid" onPress={handleBooking} />
    </View>
  );
}
