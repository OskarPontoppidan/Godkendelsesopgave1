import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velkommen til HjælpMig</Text>
      <Text style={styles.subtitle}>Find den rette behandler for dig</Text>
      <Button
        title="Se behandlere"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}
