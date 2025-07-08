import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CRUD</Text>
      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Crear") }>
        <Text style={styles.cardIcon}>➕</Text>
        <Text style={styles.cardTitle}>Crear</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Leer") }>
        <Text style={styles.cardIcon}>👀</Text>
        <Text style={styles.cardTitle}>Leer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Actulizar") }>
        <Text style={styles.cardIcon}>🔄</Text>
        <Text style={styles.cardTitle}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Eliminar") }>
        <Text style={styles.cardIcon}>❌</Text>
        <Text style={styles.cardTitle}>Eliminar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Operacion") }>
        <Text style={styles.cardIcon}>🧮</Text>
        <Text style={styles.cardTitle}>Operación Matemática</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#222',
  },
  btn : {
    width: 220,
    backgroundColor: '#d1e8fa',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 14,
    marginBottom: 14,
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
});