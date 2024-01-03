import '../styles/ContactCard.css';

const ContactCard = (props) => {
  const redirectToLink = () =>{
    window.open(props.link, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className='contact-card' onClick={redirectToLink}>
      <div className='icon-container'>
        <img className='icon' src={props.logo} alt="Logo-Whatsapp" />
      </div>
      <div className="content-card">
        <h3>{props.user}</h3>
      </div>
    </div>
  );
}

export default ContactCard;