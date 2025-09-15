import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Picker, Platform } from 'react-native';
import styles from '../styles/styles';
import TopBar from '../components/TopBar';

export default function HomeScreen({ navigation }) {
  const [selectedType, setSelectedType] = useState('Psykolog');

  const goToList = () => {
    navigation.navigate('Behandlere', {
      screen: 'List',
      params: { filter: selectedType },
    });
  };

  return (
    <View style={styles.container}>
      <TopBar
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        onPressSeBehandlere={goToList}
      />

      <Text style={styles.title}>Velkommen til HjælpMig</Text>
      <Text style={styles.subtitle}>Find den rette behandler for dig</Text>

      <TouchableOpacity style={styles.button} onPress={goToList}>
        <Text style={styles.buttonText}>Se behandlere</Text>
      </TouchableOpacity>
    </View>
  );
}
