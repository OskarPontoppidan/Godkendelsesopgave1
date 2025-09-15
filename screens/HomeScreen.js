import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
  const [selectedType, setSelectedType] = useState('Psykolog');

  return (
    <View style={styles.container}>
      {/* TOPBAR */}
      <View style={styles.topbar}>
        {/* Vælg behandling */}
        <Picker
          selectedValue={selectedType}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
        >
          <Picker.Item label="Psykolog" value="Psykolog" />
          <Picker.Item label="Coach" value="Coach" />
          <Picker.Item label="Kostvejleder" value="Kostvejleder" />
        </Picker>

        {/* Link til "Se behandlere" */}
        <TouchableOpacity onPress={() => navigation.navigate('Behandlere')}>
          <Text style={styles.topbarLink}>Se behandlere</Text>
        </TouchableOpacity>
      </View>

      {/* INDHOLD */}
      <Text style={styles.title}>Velkommen til HjælpMig</Text>
      <Text style={styles.subtitle}>Find den rette behandler for dig</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Behandlere')}
      >
        <Text style={styles.buttonText}>Se behandlere</Text>
      </TouchableOpacity>
    </View>
  );
}
