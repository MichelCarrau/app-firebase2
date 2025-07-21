import React from 'react';
import Navegacion from './Navegacion';
import ContextProductosProvider from './src/context/contextProductos'; 

export default function App() {
  return (
    <ContextProductosProvider>
      <Navegacion />
    </ContextProductosProvider>
  );
}
