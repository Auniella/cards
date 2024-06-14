import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="top">
        <div className="img-container">
          <img src={props.imageUrl} alt={props.titre} />
        </div>
        <FontAwesomeIcon
          id="delete"
          icon={faTrash}
          onClick={() => props.deleteCard(props.id)}
        />
      </div>
      <div className="bottom">
        <div className="icon">
          <FontAwesomeIcon id="heart" icon={faHeart} />
        </div>
        <div className="infos">
          <h3>{props.titre}</h3>
          <p>{props.details}</p>
        </div>
        <button id="agrandir" onClick={() => props.openModal(props.imageUrl)}>
          Afficher
        </button>
      </div>
    </div>
  );
}
