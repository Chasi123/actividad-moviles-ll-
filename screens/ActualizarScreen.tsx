import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, update } from 'firebase/database';
import { db } from '../firebase/Config';

export default function ActualizarScreen() {
   const [nombre, setNombre] = useState('');
   const [precio, setPrecio] = useState('');
   const [categoria, setCategoria] = useState('');
   const [stock, setStock] = useState('');
 
 
  function editar() {
   const precioNum = parseFloat(precio) || 0;
   const precioDescuento = (precioNum * 0.9).toFixed(2);
 
   update(ref(db, 'productos/' + nombre), {
     precio: precio,
     preciodescuento: precioDescuento,
     stock: stock
   });
 }  
 
   return (
     <View style={styles.container}>
       <Text style={styles.title}>Editar Producto</Text>

       <Text style={{color: 'red'}}>Ingrese el nombre del producto a editar</Text>
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
         placeholder="Stock"
         value={stock}
         onChangeText={(texto)=> setStock(texto)}
         keyboardType="numeric"
       />
       <Button title="Editar" onPress={()=>editar()} />
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