import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function CrearScreen() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [stock, setStock] = useState('');

  // Calcular precio con descuento (10% menos)
  const precioNum = parseFloat(precio) || 0;
  const precioDescuento = (precioNum * 0.9).toFixed(2);

  const handleGuardar = () => {
    alert(
      `Nombre: ${nombre}\nPrecio: ${precio}\nPrecio con descuento: ${precioDescuento}\nCategoría: ${categoria}\nStock: ${stock}`
    );
    // Aquí puedes guardar los datos, incluyendo precioDescuento
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Producto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
      />
      <Text style={styles.descuento}>
        Precio con descuento: ${precioDescuento}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={categoria}
        onChangeText={setCategoria}
      />
      <TextInput
        style={styles.input}
        placeholder="Stock"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
      />
      <Button title="Guardar" onPress={handleGuardar} />
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
  },
});