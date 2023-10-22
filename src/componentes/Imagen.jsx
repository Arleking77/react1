import React from 'react';

const Imagen = ({ src, alt }) => {
  return (
    <img src={src.toString()} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />
  );
};

export default Imagen;
