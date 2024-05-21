import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import '../../style/style.css';


function TarjetasProductos() {
    const [helados, setHelados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Obtener helados
            const responseHelados = await fetch('http://localhost:8021/api/helados');
            if (!responseHelados.ok) {
              throw new Error('Error al obtener los datos de los helados');
            }
            const dataHelados = await responseHelados.json();
            setHelados(dataHelados.helado);
          } catch (error) {
            console.error('Error', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className="tarjetaHelados" >
      {helados.map((helado, index)  => (
        <Card key={index}  >
          <Card.Img  src={helado.imagen} />
          <Card.Body>
            <Card.Title>{helado.nombre}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TarjetasProductos;