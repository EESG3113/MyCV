import imagePerfil from './images/perfil.jpg';
import ContactCard from './components/ContactCard';
import './App.css';

const Name =  'Edgardo Enrique';
const LastName = 'Sanchez Gomez';
const ShortName = 'Edgardo Sanchez';
const Ocupation = 'Ingeniero en informática';

const Whatsapp = '3335584053';
const LinkedIn = 'www.linkedin.com/in/edgardo-s';
const Email = 'eesg031103@gmail.com'

function App() {
  return (
    <div className='App'>
      <div className='informationAndTools'>
        <img className='imagePerfil' alt='Imágen de perfil' src={imagePerfil} />
        <ContactCard link={'https://wa.me/' + Whatsapp} logo='https://icones.pro/wp-content/uploads/2021/02/icone-du-logo-whatsapp-vert.png' user={Whatsapp} />
        <ContactCard link={'https://' + LinkedIn} logo='https://cdn-icons-png.flaticon.com/256/174/174857.png' user={ShortName} />
        <ContactCard link={'mailto:' + Email} logo='https://cdn-icons-png.flaticon.com/512/281/281769.png' user={Email} />
      </div>
      <div className='perfil'>
        <div className='header-information'>
          <h1>{Name}{LastName}</h1>
          <h2>{Ocupation}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
