import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/styles';

export default function TopBar({ selectedType, setSelectedType, onPressSeBehandlere }) {
  return (
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

      <TouchableOpacity onPress={onPressSeBehandlere}>
        <Text style={styles.topbarLink}>Se behandlere</Text>
      </TouchableOpacity>
    </View>
  );
}
