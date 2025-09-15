import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    width: '100%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    height: 60,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  picker: {
    height: 40,
    width: 180,
  },
  topbarLink: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    backgroundColor: '#e0f7ff',
    height: 60,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  picker: {
    height: 40,
    width: 160,
  },
  topbarLink: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
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
  
  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    borderRadius: 10,
  },
  
  // Hvis du bruger rigtig billede:
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 10,
  },
  
  
});
