import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore/lite';
import { db } from '../firebase/Config';
import { ref, set } from 'firebase/database';

export default function CrearScreen() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [stock, setStock] = useState('');


 function guardar() {
  const precioNum = parseFloat(precio) || 0;
  const precioDescuento = (precioNum * 0.9).toFixed(2);

  set(ref(db, 'productos/' + nombre), {
    precio: precio,
    preciodescuento: precioDescuento,
    categoria: categoria,
    stock: stock
  });
}  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Producto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
       onChangeText={(texto)=> setNombre(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={precio}
        onChangeText={(texto)=> setPrecio(texto)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={categoria}
        onChangeText={(texto)=> setCategoria(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder="Stock"
        value={stock}
        onChangeText={(texto)=> setStock(texto)}
        keyboardType="numeric"
      />
      <Button title="Guardar" onPress={()=>guardar()} />
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#e0eafc',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#22223b',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#a9bcd0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  descuento: {
    fontSize: 16,
    color: '#38b000',
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});