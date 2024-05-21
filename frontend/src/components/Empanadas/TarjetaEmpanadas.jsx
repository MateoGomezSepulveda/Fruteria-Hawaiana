import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import '../../style/style.css';


function TarjetasEmpanadas() {
    const [empanadas, setEmpanadas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Obtener Desayunos
            const responseEmpanadas = await fetch('http://localhost:8021/api/empanadas');
            if (!responseEmpanadas.ok) {
              throw new Error('Error al obtener los datos de los helados');
            }
            const dataEmpanadas = await responseEmpanadas.json();
            setEmpanadas(dataEmpanadas.empanada);
          } catch (error) {
            console.error('Error', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className="tarjetaHelados" >
      {empanadas.map((empanada, index)  => (
        <Card key={index}  >
          <Card.Img  src={empanada.imagen} />
          <Card.Body>
            <Card.Title>{empanada.nombre}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TarjetasEmpanadas;