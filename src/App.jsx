import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from '../src/componentes/Titulo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; // Importamos el componente
import Card from 'react-bootstrap/Card';
import MyCard from './componentes/Mycard'
import Header from './componentes/Header'
import Footer from './componentes/Footer'

function App() {
  return (
  
   <>
          <div>
          <Header productName="Adopta un Perrit@" />
          </div>
          <div className="contenedor" >
          <MyCard
          image="/jpg/perritos-primeros-auxilios.jpg" 
          alt="Imagen 1"
          title="Juanin"
          descripcion="Perrito adorable, solo cariño y amor te entregara"
          colorButton="success"
          textButton="Adoptar"/> { /* Definimos las props que se pasaran a MyCard */ }
          <MyCard
          image="/jpg/18-042732_pbc5_perrito-gala-880x500.jpeg" 
          alt="Imagen 2"
          title="Gaspi"
          descripcion="Perro Comilon, Anda por todos lados"
          colorButton="muted"
          textButton="adoptado"/> { /* Definimos las props que se pasaran a MyCard */ }
         <MyCard
          image="/jpg/bulldog-1024x573.jpg" 
          alt="Imagen 3"
          title="Boby"
          descripcion="Le encanta morder zapatos"
          colorButton="warning"
          textButton="Adoptar"/> { /* Definimos las props que se pasaran a MyCard */ }
          <MyCard
          image="/jpg/67d3c53bd012acf2a1003e1d9cd4777d.jpg" 
          alt="Imagen 1"
          title="Sol"
          descripcion="Nada mas lindo que este hermoza perrita jugetona"
          colorButton="dark"
          textButton="Adoptar"/> { /* Definimos las props que se pasaran a MyCard */ }
          </div>
          <div>
          <Footer textt ="Adoptar un perrito a través de nuestra web es una oportunidad para dar amor y un hogar a una mascota necesitada. Cada adopción contribuye a salvar vidas y a brindar a estos leales amigos una segunda oportunidad Tu elección de adoptar no solo enriquecerá tu vida, sino que también hará una diferencia real en el mundo de los animales"
          ></Footer>
          </div>
          </>
          
          
          
          
          
          
    );
}




  export default App;