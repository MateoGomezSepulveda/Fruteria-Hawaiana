import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import '../../style/style.css';


function TarjetasDesayunos() {
    const [desayunos, setDesayunos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Obtener Desayunos
            const responseDesayunos = await fetch('http://localhost:8021/api/desayunos');
            if (!responseDesayunos.ok) {
              throw new Error('Error al obtener los datos de los helados');
            }
            const dataDesayunos = await responseDesayunos.json();
            setDesayunos(dataDesayunos.desayuno);
          } catch (error) {
            console.error('Error', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className="tarjetaHelados" >
      {desayunos.map((desayuno, index)  => (
        <Card key={index}  >
          <Card.Img  src={desayuno.imagen} />
          <Card.Body>
            <Card.Title>{desayuno.nombre}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TarjetasDesayunos;