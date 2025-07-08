import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, remove } from 'firebase/database';
import { db } from '../firebase/Config';

export default function EliminarScreen() {
    const [nombre, setnombre] = useState("")

    function eliminar(){
      remove(ref(db, 'productos/' + nombre))
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eliminar Producto</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el nombre del producto"
        value={nombre}
        onChangeText={(texto) => setnombre(texto)}
      />
      <Button 
        title='Eliminar'
        color="#d90429"
        onPress={() => eliminar()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0eafc',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#22223b',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 48,
    borderColor: '#a9bcd0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 24,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});