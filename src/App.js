import './App.css';
import { Footer } from './components/Footer/Footer';
import { ImgProductos } from './components/ImgProductos/ImgProductos';
import { Inicio } from './components/Inicio/Inicio';
import { Lightbox } from './components/Lightbox/Lightbox';
import { Navbar } from './components/Navbar/Navbar';
import { Nosotros } from './components/Nosotros/Nosotros';
import { Servicios } from './components/Servicios/Servicios';
import { Trabajos } from './components/Trabajos/Trabajos';
import { Objetivos } from './components/Objetivos/Objetivos';
import { useState } from 'react';


function App() {

  const [LightBox, setLightBox] = useState(false);
  const [IMG_LightBox, setIMG_LightBox] = useState('')
  const handleLightBox = (state, e, urlIMG = null)=>{
    if(state == true){
      setLightBox(true);
      setIMG_LightBox(urlIMG.default);
    } else {
      console.log(state == false);
      setLightBox(false);
    }
  }

  return (
    <div className="App">
      <Navbar LightBox={LightBox}/> 
      <Lightbox LightBox={LightBox} IMG_LightBox={IMG_LightBox} setLightBox={setLightBox}/>
      <Inicio/>
      <Nosotros/>
      <Servicios />
      <Trabajos handleLightBox={handleLightBox}/>
      <Objetivos />
      <Footer/> 
    </div>
  );
}

export default App;
