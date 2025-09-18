import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import styles from '../styles/styles'; // Husk korrekt sti

const tider = [
  'Mandag 10:00',
  'Mandag 14:00',
  'Tirsdag 09:00',
  'Onsdag 12:00',
  'Torsdag 16:00',
];

export default function DetailScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [comment, setComment] = useState('');

  const handleTimePress = (time) => {
    setSelectedTime(time);
    setModalVisible(true);
  };

  const confirmBooking = () => {
    Alert.alert('Booking bekræftet', `Tid: ${selectedTime}\nKommentar: ${comment}`);
    setModalVisible(false);
    setComment('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>⬅ Tilbage</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Anna Holm</Text>
      <Text style={styles.subtitle}>Kostvejleder</Text>
      <Text style={styles.subtitle}>Fokus på sund livsstil og mental balance</Text>

      <Text style={styles.title}>Ledige tider:</Text>

      {tider.map((time, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() => handleTimePress(time)}
        >
          <Text style={styles.name}>{time}</Text>
        </TouchableOpacity>
      ))}

      {/* Modal med kommentar */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Booking: {selectedTime}</Text>
            <TextInput
              style={styles.commentInput}
              placeholder="Skriv en kommentar (valgfri)"
              value={comment}
              onChangeText={setComment}
              multiline
            />
            <TouchableOpacity
              style={styles.button}
              onPress={confirmBooking}
            >
              <Text style={styles.buttonText}>Bekræft</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{ marginTop: 10, alignItems: 'center' }}
            >
              <Text style={{ color: 'red' }}>Annuller</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
