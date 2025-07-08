import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/Config';

export default function OpeacionMatematica() {
  const [datos, setdatos] = useState([]);
  const [total, settotal] = useState(0);

  


  

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

   useEffect(() => {
    const suma = datos.reduce((acumulador: number, item: any) => {
      const precio = parseFloat(item.precio) ;
      const stock = parseFloat(item.stock);
      return acumulador + (precio * stock);
    }, 0);
    settotal(suma);
  }, [datos]);

  return (
    <View style={styles.container}>
      <FlatList 
        data={datos}
        renderItem={({ item }: any) =>
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.precio}>Total acumulado: ${(item.precio) * (item.stock)} </Text>
          </View>
           

        }
      />
            <Text style={styles.txt}>Total: ${total}</Text>

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
     txt:{
  fontSize: 22,
  fontWeight: 'bold',
  color: '#22223b',
  marginBottom: 20,
  textAlign: 'center',
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 12,
  elevation: 2,
}
});