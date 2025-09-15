import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/styles';

export default function TopBar({ selectedType, setSelectedType, onSeeBehandlere, navigation }) {
  return (
    <View style={styles.topbar}>
      {/* Hjem link */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.topbarLink}>Hjem</Text>
      </TouchableOpacity>

      {/* Vælg ydelse */}
      <Picker
        selectedValue={selectedType}
        style={styles.picker}
        onValueChange={(value) => setSelectedType(value)}
        mode="dropdown"
      >
        <Picker.Item label="Psykolog" value="Psykolog" />
        <Picker.Item label="Coach" value="Coach" />
        <Picker.Item label="Kostvejleder" value="Kostvejleder" />
      </Picker>

      {/* Se behandlere */}
      <TouchableOpacity onPress={onSeeBehandlere}>
        <Text style={styles.topbarLink}>Se behandlere</Text>
      </TouchableOpacity>
    </View>
  );
}
