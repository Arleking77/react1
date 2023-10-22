import React from 'react';
import Card from 'react-bootstrap/Card';
import Boton from './Boton';
import Imagen from './Imagen'; 

const MyCard = ({ image, title, descripcion ,colorButton, textButton }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Imagen src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>{descripcion}</p>
      <Boton colorButton={colorButton} textButton={textButton} />
      </Card.Body>
    </Card>
  );
};

export default MyCard;
