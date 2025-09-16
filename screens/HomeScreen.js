import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TopBar from '../components/TopBar';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
  const [selectedType, setSelectedType] = useState('Psykolog');

  const goToList = () => {
    navigation.navigate('Behandlere', {
      screen: 'List',
      params: { filter: selectedType }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <TopBar selectedType={selectedType} setSelectedType={setSelectedType} onPressSeBehandlere={goToList} />

      {/* Content under topbaren */}
      <View style={[styles.container, { marginTop: 80 }]}>
        <Text style={styles.title}>Velkommen til HjælpMig</Text>
        <Text style={styles.subtitle}>Find den rette behandler for dig</Text>

        <TouchableOpacity style={styles.button} onPress={goToList}>
          <Text style={styles.buttonText}>Se behandlere</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
