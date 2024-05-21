import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Helados from './components/Helados/Helados';
import Admin from './components/Admin/admin';
import Usuario from './components/Usuario/usuarios';
import Configurar from './components/configurar/configurar';
import Ensaladas from './components/Ensaladas/Ensaladas';
import Desayunos from './components/Desayunos/Desayunos';
import Empanadas from './components/Empanadas/Empanadas';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/HELADOS" element={<Helados />} />
        <Route path="/ENSALADAS" element={<Ensaladas />} />
        <Route path="/DESAYUNOS" element={<Desayunos />} />
        <Route path="/EMPANADAS" element={<Empanadas />} />
        <Route path="/configurar" element={<Configurar />} />
      </Routes>
  );
}

export default App;
