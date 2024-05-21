import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Helados from './components/Helados/Helados';
import Admin from './components/Admin/admin';
import Usuario from './components/Usuario/usuarios';
import Configurar from './components/configurar/configurar';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/HELADOS" element={<Helados />} />
        <Route path="/configurar" element={<Configurar />} />
      </Routes>
  );
}

export default App;
