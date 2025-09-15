import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Picker, Platform } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
  const [selectedType, setSelectedType] = useState('Psykolog');

  const goToList = () => {
    navigation.navigate('Behandlere', { screen: 'List', params: { filter: selectedType } });
  };

  return (
    <View style={styles.container}>
      {/* Topbar */}
      <View style={styles.topbar}>
        <Picker
          selectedValue={selectedType}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
          mode="dropdown"
        >
          <Picker.Item label="Psykolog" value="Psykolog" />
          <Picker.Item label="Coach" value="Coach" />
          <Picker.Item label="Kostvejleder" value="Kostvejleder" />
        </Picker>

        <TouchableOpacity onPress={goToList}>
          <Text style={styles.topbarLink}>Se behandlere</Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <Text style={styles.title}>Velkommen til HjælpMig</Text>
      <Text style={styles.subtitle}>Find den rette behandler for dig</Text>

      <TouchableOpacity style={styles.button} onPress={goToList}>
        <Text style={styles.buttonText}>Se behandlere</Text>
      </TouchableOpacity>
    </View>
  );
}
