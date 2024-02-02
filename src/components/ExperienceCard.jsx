import '../styles/ExperienceCard.css';

const ExperienceCard = (props) => {

  return(
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          <img src={props.Logo} alt={'Logo de ' + props.CompanyName} />
          {props.CompanyName}
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
        <div class="accordion-body">
          <h4>{props.Dates}</h4>
          <h5><strong>Puesto desempeñado:</strong> {props.PositionHeld} </h5>
          <h5><strong>Actividades realizadas:</strong> {props.Activities}</h5>
          <h5><strong>Habilidades adquiridas:</strong></h5>
          <ol class="list-group list-group-numbered">
            {props.Skills.map((skill) => (
              <li class="list-group-item">{skill}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;