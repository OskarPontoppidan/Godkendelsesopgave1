import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, Picker } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
  const [selected, setSelected] = useState('Psykolog');

  const handleNavigate = () => {
    navigation.navigate('Behandlere', {
      filter: selected,
    });
  };

  return (
    <View style={styles.container}>
      {/* Topbar kun på web */}
      {Platform.OS === 'web' && (
        <View style={styles.topbar}>
          <Picker
            selectedValue={selected}
            style={styles.picker}
            onValueChange={(itemValue) => setSelected(itemValue)}
          >
            <Picker.Item label="Psykolog" value="Psykolog" />
            <Picker.Item label="Coach" value="Coach" />
            <Picker.Item label="Kostvejleder" value="Kostvejleder" />
          </Picker>
          <TouchableOpacity onPress={handleNavigate}>
            <Text style={styles.topbarLink}>Se behandlere</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.title}>Velkommen til HjælpMig</Text>
      <Text style={styles.subtitle}>Find den rette behandler for dig</Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigate}>
        <Text style={styles.buttonText}>Se behandlere</Text>
      </TouchableOpacity>
    </View>
  );
}
