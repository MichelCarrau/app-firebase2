import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useContext, useState } from 'react';

import { db } from '../../script/configFirebase';
import { estadoGlobalProductos } from '../../context/contextProductos';

export default function ScreenHome() {

  const { dataproductos, mandardatos, obtenerdatos } = useContext(estadoGlobalProductos);
  const [nombre, setNombre] = useState('');

  console.log(dataproductos);

  return (
    <View>
      <Text>ScreenHome</Text>

      <Button
        title='Subir dato a firebase'
        onPress={() => mandardatos("Laptop hp", '3', 10000)}
      />

      <Button
        title='Obtener datos de firebase'
        onPress={() => obtenerdatos()}
      />

      {
        dataproductos.map((producto, index) => (
          <View key={index}> 
            <Text>{producto.nombre ?? 'Sin nombre'}</Text>
          </View>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({});
