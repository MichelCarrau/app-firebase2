// src/context/contextProductos.js
import React, { createContext, useState } from 'react';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../script/configFirebase';


export const estadoGlobalProductos = createContext();

export default function ContextProductosProvider({ children }) {
  const [dataproductos, setDataproductos] = useState([]);

const mandardatos = async (nombre,stock,precio) => {
        try {
            const docRef = await addDoc(collection(db, 'productos'), {
                nombre: nombre,
                stock:stock,
                precio:precio,
                date: new Date(),
            })
            console.log('Documento creado con el ID', docRef.id)
            obtenerdatos(); // Actualizar la lista de productos después de agregar uno nuevo
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerdatos = async () => {
      try {
        const querySnapShot = await getDocs(collection(db, 'productos'));
        const productoData = querySnapShot.docs.map((doc) =>({
          id:doc.id,
          ...doc.data()
        }));
        setDataproductos(productoData);
      } catch (error) {
        console.log("Error al leer los datos xdon toi chikito",error);
      }

    }



  return (
    <estadoGlobalProductos.Provider value={{ dataproductos, mandardatos, obtenerdatos }}>
      {children}
    </estadoGlobalProductos.Provider>
  );
}
