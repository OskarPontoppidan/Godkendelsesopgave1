import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const DATA = [
  {
    id: '1',
    name: 'Mette Jensen',
    role: 'Psykolog',
    desc: 'Specialiseret i angst og depression',
  },
  {
    id: '2',
    name: 'Lars Pedersen',
    role: 'Coach',
    desc: 'Hjælper med stresshåndtering og målsætning',
  },
  {
    id: '3',
    name: 'Anna Holm',
    role: 'Kostvejleder',
    desc: 'Fokus på sund livsstil og mental balance',
  },
];

export default function ListScreen({ navigation, route }) {
  const filter = route.params?.filter;

  const filteredData = filter
    ? DATA.filter((item) => item.role === filter)
    : DATA;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detail', { item })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.role}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
