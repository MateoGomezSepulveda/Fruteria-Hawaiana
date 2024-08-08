import React, { useState, useEffect } from 'react';
import { Navigate  } from 'react-router-dom';
import '../../style/style.css';
import TarjetasProductos from '../Helados/TarjetasHelados';

function Configurar() {

  const [categorias, setCategorias] = useState([]);
  const [usuario, setUsuario] = useState(false);
  const nombre = localStorage.getItem('nombre');
  const rol = localStorage.getItem('rol');
  const token = localStorage.getItem('token');

  useEffect(() => {
      const fetchData = async () => {
          try {
              const responseCategorias = await fetch('http://localhost:8021/api/categorias');
              if (!responseCategorias.ok) {
                  throw new Error('Error al obtener los datos de categorías');
              }
              const dataCategorias = await responseCategorias.json();
              setCategorias(dataCategorias.categorias);

              if (!token) {
                  return <Navigate  to="/" />;
              } else {
                  setUsuario(true);
              }
          } catch (error) {
              console.error('Error', error);
          }
      };

      fetchData();
  }, [token]);

  return (
      <div className="contenedor">
          <div className={`parte-izquierda ${usuario ? 'autenticado' : ''}`}>
              {usuario && (
                  <div className="perfil">
                      <h3>Fruteria Hawaiana</h3>
                      <img src="" alt="Imagen de perfil" className="imagenPerfil" />
                      <h3>{nombre}</h3>
                      <p>{rol}</p>
                  </div>
              )}
              <table className="table table-custom">
                  <tbody className="cardsCategoria" id="datosCategoria">
                      {categorias.map((categoria, _id) => (
                          <tr key={_id}>
                              <td>
                                  <a href={`${categoria.nombre}`}>{categoria.nombre}</a>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
          <div className="parte-media">
              <div>
                  <h2>Productos</h2>
              </div>
              <table className="table table-custom">
                  <thead>
                      <tr></tr>
                  </thead>
                  <tbody className="cards" id="datosHelados">
                      <TarjetasProductos/>
                  </tbody>
              </table>
          </div>
      </div>
  );
}

export default Configurar;
