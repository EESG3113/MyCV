import imagePerfil from './images/perfil.jpg';
import ContactCard from './components/ContactCard';
import ProgrammingLanguageCard from './components/ProgrammingLanguageCard';
import React, { useEffect, useState } from 'react';
import './App.css';

const Name =  'Edgardo Enrique';
const LastName = 'Sanchez Gomez';
const ShortName = 'Edgardo Sanchez';
const Ocupation = 'Ingeniero en informática';

const Whatsapp = '3335584053';
const LinkedIn = 'www.linkedin.com/in/edgardo-s';
const Email = 'eesg031103@gmail.com';

function App() {
  const [ProfessionalProfile, setContenidoArchivo] = useState('');

  useEffect(() => {
    const obtenerContenidoArchivo = async () => {
      try {
        const response = await fetch('./txt/ProfessionalProfile.txt');
        const data = await response.text();
        setContenidoArchivo(data);
      } catch (error) {
        console.error('Error al obtener contenido del archivo:', error);
      }
    };

    obtenerContenidoArchivo();
  }, []);

  return (
    <div className='App'>
      <div className='informationAndTools'>
        <img className='imagePerfil' alt='Imágen de perfil' src={imagePerfil} />
        <div className='information-container'>
          <h3 className='title-part'>Contacto</h3>
          <hr />
          <ContactCard link={'https://wa.me/' + Whatsapp} logo='https://icones.pro/wp-content/uploads/2021/02/icone-du-logo-whatsapp-vert.png' user={Whatsapp} />
          <ContactCard link={'https://' + LinkedIn} logo='https://cdn-icons-png.flaticon.com/256/174/174857.png' user={ShortName} />
          <ContactCard link={'mailto:' + Email} logo='https://cdn-icons-png.flaticon.com/512/281/281769.png' user={Email} />
        </div>
        <div className='information-container'>
          <h3 className='title-part'>Lenguajes de programación</h3>
          <hr />
          <ProgrammingLanguageCard logo='https://www.devacademy.es/wp-content/uploads/2018/10/python-logo.png' language='Python' />
          <ProgrammingLanguageCard logo='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png' language='HTML' />
          <ProgrammingLanguageCard logo='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png' language='CSS' />
          <ProgrammingLanguageCard logo='https://www.drk.com.ar/logo/js.png' language='Javascript' />
          <ProgrammingLanguageCard logo='https://raw.githubusercontent.com/rexxars/react-hexagon/master/logo/react-hexagon.png' language='React' />
          <ProgrammingLanguageCard logo='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/683px-ISO_C%2B%2B_Logo.svg.png' language='C++' />
          <ProgrammingLanguageCard logo='https://cdn-icons-png.flaticon.com/512/9698/9698555.png' language='SQL' />
          <ProgrammingLanguageCard logo='https://chuidiang.org/images/f/f3/Logo_php.png' language='PHP' />
          <ProgrammingLanguageCard logo='https://content.spiceworksstatic.com/service.marketplace-api/uploaded_contents/10a239cd71b4a5e8d33453d9072c6fa5.png' language='VBA' />
        </div>
      </div>
      <div className='perfil'>
        <div className='header-perfil'>
          <h1>{Name}{LastName}</h1>
          <h2>{Ocupation}</h2>
        </div>
        <div className='content-perfil'>
          <h3>Perfil Profesional</h3>
          <hr />
          <h4 className='professional-profile'>{ProfessionalProfile}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
