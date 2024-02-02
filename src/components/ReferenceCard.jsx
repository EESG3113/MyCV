import '../styles/ReferenceCard.css'

const ReferenceCard = (props) => {
  const redirectToLink = (number) =>{
    window.open('https://wa.me/' + number, '_blank', 'noopener,noreferrer');
  }

  return (
    <div class='card' style={{width: '18rem'}}>
      <div class='card-body'>
        <h5 class='card-title'>{props.Name}</h5>
        <h6 class='card-subtitle mb-2 text-body-secondary'>{props.Occupation}</h6>
        {props.Numbers.map((Number) => (
          <a href={redirectToLink(Number)} class='card-link'>{Number}</a>
        ))}
      </div>
    </div>
  );
}

export default ReferenceCard;