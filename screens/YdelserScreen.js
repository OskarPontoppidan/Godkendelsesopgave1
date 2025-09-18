import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList
} from 'react-native';
import styles from '../styles/styles';

const ydelser = [
  { id: '1', name: 'Psykolog' },
  { id: '2', name: 'Coach' },
  { id: '3', name: 'Kostvejleder' },
  { id: '4', name: 'Parterapeut' },
];

export default function YdelserScreen({ navigation }) {
  const [selectedYdelse, setSelectedYdelse] = useState(ydelser[0].name);
  const [modalVisible, setModalVisible] = useState(false);

  const goToBehandlere = () => {
    navigation.navigate('Behandlere', {
      filter: selectedYdelse,
    });
  };

  const chooseYdelse = (ydelse) => {
    setSelectedYdelse(ydelse.name);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vælg en ydelse</Text>

      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>{selectedYdelse}</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={ydelser}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => chooseYdelse(item)}
                >
                  <Text style={styles.modalText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalCancel}
            >
              <Text style={{ color: 'red', fontWeight: 'bold' }}>Annuller</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.selectedText}>
        Du har valgt: <Text style={{ fontWeight: 'bold' }}>{selectedYdelse}</Text>
      </Text>

      <TouchableOpacity
        onPress={goToBehandlere}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Se behandlere</Text>
      </TouchableOpacity>
    </View>
  );
}
