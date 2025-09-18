import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Appens baggrund og centrering
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef9ff',
  },

  // Overskrift
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#1a1a1a',
  },

  // Underoverskrift
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },

  // Brugt til f.eks. knapper og item cards
  item: {
    backgroundColor: '#d6e4f0',
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },

  // Tekst i item
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1a1a1a',
  },

  // Knapper
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 20,
    alignSelf: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  // Picker dropdown
  picker: {
    height: 40,
    width: 200,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
  },

  // Billedpladsholder
  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },

  // Hvis du bruger rigtige billeder
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },

  // Række-layout (fx knapper side om side)
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },

  column: {
    flex: 1,
    padding: 10,
  },
  pickerWrapper: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 20,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  
  picker: {
    height: 50,
    width: '100%',
    color: '#333',
    fontSize: 16,
  },
  
  selectedText: {
    marginTop: 30,
    fontSize: 16,
    color: '#333',
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    alignItems: 'center',
    marginVertical: 20,
  },

  dropdownText: {
    fontSize: 16,
    color: '#333',
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalContent: {
    backgroundColor: '#fff',
    margin: 30,
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },

  modalItem: {
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },

  modalText: {
    fontSize: 18,
    color: '#333',
  },

  modalCancel: {
    marginTop: 10,
    alignItems: 'center',
  },

});
