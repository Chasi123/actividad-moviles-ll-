import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/Config';

export default function LeerScreen() {
  const [datos, setdatos] = useState([]);
  const [filtrar, setFiltrar] = useState(false);

  function leer (){
    const starCountRef = ref(db, 'productos/' );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      let arreglo: any = Object.keys(data).map((nombre) => ({
        nombre, ...data[nombre] 
      }))
      setdatos(arreglo)
    });
  }

  useEffect(() => {
    leer(); 
  }, []);

  const datosFiltrados = filtrar
    ? datos.filter((item: any) => parseFloat(item.stock) < 10)
    : datos;

  return (
    <View style={styles.container}>
      <Button
        title={filtrar ? "Mostrar todos" : "Menores a 10"}
        onPress={() => setFiltrar(!filtrar)}
        color="#4361ee"
      />
      <FlatList 
        data={datosFiltrados}
        renderItem={({ item }: any) =>
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.precio}>Precio: ${item.precio}</Text>
            <Text style={styles.descuento}>Descuento: ${item.preciodescuento}</Text>
            <Text style={styles.stock}>Stock: {item.stock}</Text>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0eafc',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#22223b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#22223b',
    marginBottom: 8,
  },
  precio: {
    fontSize: 16,
    color: '#4361ee',
    marginBottom: 4,
  },
  descuento: {
    fontSize: 16,
    color: '#38b000',
    fontWeight: 'bold',
  },
  stock: {
    fontSize: 16,
    color: '#ff8800',
    fontWeight: 'bold',
  },
});