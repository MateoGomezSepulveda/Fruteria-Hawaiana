import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import '../../style/style.css';


function TarjetasEnsalada() {
    const [ensaladas, setEnsaladas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Obtener Ensaladas
            const responseEnsaladas = await fetch('http://localhost:8021/api/ensaladas');
            if (!responseEnsaladas.ok) {
              throw new Error('Error al obtener los datos de los helados');
            }
            const dataEnsaladas = await responseEnsaladas.json();
            setEnsaladas(dataEnsaladas.ensalada);
          } catch (error) {
            console.error('Error', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className="tarjetaHelados" >
      {ensaladas.map((ensalada, index)  => (
        <Card key={index}  >
          <Card.Img  src={ensalada.imagen} />
          <Card.Body>
            <Card.Title>{ensalada.nombre}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TarjetasEnsalada;