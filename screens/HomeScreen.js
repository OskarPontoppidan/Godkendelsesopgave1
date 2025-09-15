import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
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
        onSeeBehandlere={goToList}
        navigation={navigation}
      />

      {/* Indhold layout i to kolonner */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>Velkommen til HjælpMig</Text>
          <Text style={styles.subtitle}>Find den rette behandler for dig</Text>
          <TouchableOpacity style={styles.button} onPress={goToList}>
            <Text style={styles.buttonText}>Se behandlere</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.column}>
          <View style={styles.imagePlaceholder} />
          {/* Evt. brug billede:
          <Image source={require('../assets/hero.png')} style={styles.image} />
          */}
        </View>
      </View>
    </View>
  );
}
