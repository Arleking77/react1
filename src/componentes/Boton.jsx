import React from 'react';
import Button from 'react-bootstrap/Button';

const Boton = ({ colorButton, textButton }) => {
  return (
    <div>
      <Button variant={colorButton}>{textButton}</Button>
    </div>
  );
};

export default Boton;
