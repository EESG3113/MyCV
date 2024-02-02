import imagePerfil from './images/perfil.jpg';
import ContactCard from './components/ContactCard';
import ExperienceCard from './components/ExperienceCard';
import ProgrammingLanguageCard from './components/ProgrammingLanguageCard';
import ReferenceCard from './components/ReferenceCard';
import React, { useEffect, useState, useRef } from 'react';
import './App.css';

const Name =  'Edgardo Enrique';
const LastName = 'Sanchez Gomez';
const ShortName = 'Edgardo Sanchez';
const Ocupation = 'Ingeniero en informática';
const University = 'Universidad de Guadalajara (CUCEI)';
const Grade = '6°'
const Age = 20;

const Whatsapp = '3335584053';
const LinkedIn = 'www.linkedin.com/in/edgardo-s';
const Email = 'eesg031103@gmail.com';

const Skills  = ['Programación Orientada a Objetos',
                  'Análisis y reparación de códigos mediante debbuggin',
                  'Liderazgo',
                  'Trabajo en equipo',
                  'Desarrollo, proyección, organización y seguimiento de proyectos',
                  'Aprendizaje rápido',
                  'Capacidad de encontrar distintas soluciones a diversos problemas',
                  'Creación, administración y mantenimiento de bases de datos SQL',
                  'Creación de informes PowerBI para análisis de información, así como manejo y transformación de datos',
                  'Desarrollo de proyectos utilizando WordPress',
                  'Excel avanzado',
                  'Manejo intermedio de Linux',
                  'Uso de sitios y herramientas sharepoint'
                ];

function App() {
  //Obtener información del archivo txt para el Perfil Profesional
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

  //Menú y navegación interna
  const menuRef = useRef(null);

  const handleItemClick = (sectionID) => {
    const section = document.getElementById(sectionID);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      })
    }
  };

  //Vista HTML general
  return (
    <div className='App' key='main' id='main'>
      <nav className='menu-container'>
        <ul ref={menuRef} className='principal-list'>
          <strong>
            <li key='main' onClick={() => handleItemClick('main')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
              </svg>
              Inicio
            </li>
          </strong>
          <li key='contact' onClick={() => handleItemClick('contact')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
            </svg>
            Contacto
          </li>
          <li key='professional-profile' onClick={() => handleItemClick('professional-profile')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-vcard-fill" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
            </svg>
            Perfil Profesional
          </li>
          <li key='knowledge' onClick={() => handleItemClick('knowledge')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 512 512">
              <path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"/>
            </svg>
            Conocimiento / Habilidades
          </li>
          <li key='work-experience' onClick={() => handleItemClick('work-experience')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings-fill" viewBox="0 0 16 16">
              <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
            </svg>
            Experiencia Laboral
          </li>
          <li key='programming-language' onClick={() => handleItemClick('programming-language')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
            </svg>
            Lenguajes de programación
          </li>
          <li key='technologies' onClick={() => handleItemClick('technologies')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 640 512">
              <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
            </svg>
            Tecnologías
          </li>
          <li key='languages' onClick={() => handleItemClick('languages')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 640 512">
              <path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"/>
            </svg>
            Idiomas
          </li>
          <li key='references' onClick={() => handleItemClick('references')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 640 512">
              <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/>
            </svg>
            Referencias
          </li>
        </ul>
      </nav>
      <div className='informationAndTools'>
        {/*Información de contacto*/}
        <img className='imagePerfil' alt='Imágen de perfil' src={imagePerfil} />
        <div className='information-container' key='contact' id='contact'>
          <h3 className='title-part'>Contacto</h3>
          <hr />
          <ContactCard link={'https://wa.me/' + Whatsapp} logo='https://icones.pro/wp-content/uploads/2021/02/icone-du-logo-whatsapp-vert.png' user={Whatsapp} />
          <ContactCard link={'https://' + LinkedIn} logo='https://cdn-icons-png.flaticon.com/256/174/174857.png' user={ShortName} />
          <ContactCard link={'mailto:' + Email} logo='https://cdn-icons-png.flaticon.com/512/281/281769.png' user={Email} />
        </div>
        {/*Lenguajes de programación que domino*/}
        <div className='information-container' key='programming-language' id='programming-language'>
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
        {/*Tecnologías que domino*/}
        <div className='information-container' key='technologies' id='technologies'>
          <h3 className='title-part'>Tecnologías</h3>
          <hr />
          <ProgrammingLanguageCard logo='https://teze-soluciones.com.mx/wp-content/uploads/2023/09/IM_PowerBIPro-Icono.png' language='PowerBI' />
          <ProgrammingLanguageCard logo='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg.png' language='Share Point' />
          <ProgrammingLanguageCard logo='https://www.c3ntro.com/hubfs/logo-aws-blanco%20(1).png' language='AWS' />
          <ProgrammingLanguageCard logo='https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-power-apps-logo.png' language='Power Apps' />
          <ProgrammingLanguageCard logo='https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-power-automate-logo.png' language='Power Automate' />
          <ProgrammingLanguageCard logo='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Wordpress_Blue_logo.png/1200px-Wordpress_Blue_logo.png' language='Word Press' />
          <ProgrammingLanguageCard logo='https://e7.pngegg.com/pngimages/747/798/png-clipart-mysql-mysql-thumbnail.png' language='MySQL' />
          <ProgrammingLanguageCard logo='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png' language='Postgre SQL' />
          <ProgrammingLanguageCard logo='https://i.pinimg.com/originals/3e/55/df/3e55dfb0980956b42cac768b740cdad6.png' language='SQL Server' />
          <ProgrammingLanguageCard logo='https://m.media-amazon.com/images/I/41QodfboFdL.png' language='Oracle DB' />
          <ProgrammingLanguageCard logo='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/512px-Microsoft_365_%282022%29.svg.png' language='Office 365' />
        </div>
        <div className='information-container' key='languages' id='languages'>
          <h3 className='title-part'>Idiomas</h3>
          <hr />
          <h4>Español
            <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar text-bg-warning progress-bar-striped progress-bar-animated" style={{width: '100%'}}>100%</div>
            </div>
          </h4>
          <h4>Inglés
            <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar text-bg-warning progress-bar-striped progress-bar-animated" style={{width: '60%'}}>60%</div>
            </div>
          </h4>
        </div>
        <div className='information-container' key='references' id='references'>
          <h3 className='title-part'>Referencias</h3>
          <hr />
          <ReferenceCard Name='Bernard Magloire' Occupation='Manager Technical Training - Philip Morris International' Numbers={['3312941298']} />
          <ReferenceCard Name='Homero Ramirez' Occupation='FG Warehouse Ops Executive - Philip Morris International' Numbers={['3331348069', '3339568689']} />
        </div>
      </div>
      {/*Perfil profesional*/}
      <div className='perfil'>
        <div className='header-perfil'>
          <h1>{Name + ' ' + LastName}</h1>
          <h2>{Ocupation}</h2>
          <h3>{'Estudiante de ' + Grade + 'semestre en la ' + University}</h3>
          <h3>{'Edad: '+Age+' años'}</h3>
        </div>
        {/*Contenido de sitio (Derecho)*/}
        <div className='content-information'>
          <div className='content-perfil'>
            <div className='professional-profile' key='professional-profile' id='professional-profile'>
              <h3>Perfil Profesional</h3>
              <hr />
              <h4>{ProfessionalProfile}</h4>
            </div>
            <div className='knowledge' key='knowledge' id='knowledge'>
              <h3>Conocimiento / Habilidades</h3>
              <hr />
              <ol class="list-group list-group-numbered">
                {Skills.map((skill) => (
                  <li class="list-group-item">{skill}</li>
                ))}
              </ol>
            </div>
            <div className='work-experience' key='work-experience' id='work-experience'>
              <h3>Experiencia Laboral</h3>
              <hr />
              <div class="accordion" id="accordionPanelsStayOpenExample" data-bs-theme="dark">
                <ExperienceCard
                 Logo='https://www.clipartmax.com/png/full/164-1641233_philip-morris-logo-png.png'
                 CompanyName='Philip Morris International (México)'
                 Dates='16 de enero de 2023 hasta la fecha'
                 PositionHeld='Becario en programación'
                 Activities='Automatización de tareas, digitalización de procesos, manejo de información en la nube y generación de reportes para análisis de datos recolectados.'
                 Skills={['Uso de herramientas avanzadas de excel como Power Pivot y Power Query, así como fórmulas y configuración de tablas dinámicas.',
                          'Desarrollo e implementación de Macros mediante programación, utilizando el lenguaje VBA o TypeScript para Excel Online.',
                          'Uso de herramientas de la plataforma SharePoint, como sitios y listas.', 
                          'Uso de Access para aplicaciones con formularios utilizando tablas vinculadas a listas de SharePoint como bases de datos.',
                          'Creación de informes PowerBI para análisis de información, así como manejo y transformación de datos.',
                          'Desarrollo, administración, organización y seguimiento de proyectos.',
                          'Creación y edición de visualizaciones de listas de SharePoint utilizando JSON para el desarrollo de proyectos.']} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
