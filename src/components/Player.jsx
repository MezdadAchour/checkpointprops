import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall, faFlag, faShirt, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

function Player({nom, equipe, nationalite, numeroMaillot, age, imageUrl}) {
  const handleButtonClick = () => {
    toast.success(`Vous avez sélectionné ${nom}`);
  };
  
  return (
    <Card className='card'>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
      <Card.Title>{nom}</Card.Title>
          <Card.Text>
            <FontAwesomeIcon icon={faBasketballBall} /> : {equipe}
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faFlag} /> : {nationalite}
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faShirt} /> : {numeroMaillot}
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faBirthdayCake} /> : {age}
          </Card.Text>
        <Button variant="primary" onClick={handleButtonClick}>Selectionner</Button>
      </Card.Body>
      <ToastContainer />
    </Card>
  );
}

Player.defaultProps = {
  nom: 'Nom du joueur',
  equipe: 'Équipe du joueur',
  nationalite: 'Nationalité du joueur',
  numeroMaillot: 'N/A',
  age: 'Âge du joueur',
  imageUrl: 'https://via.placeholder.com/150',
};
export default Player;
