import '../styles/ProgrammingLanguageCard.css'

const ProgrammingLanguageCard = (props) => {
  return(
    <div className='programming-language'>
      <img src={props.logo} alt={'Logo ' + props.language} />
      <h3>{props.language}</h3>
    </div>
  );
}

export default ProgrammingLanguageCard;