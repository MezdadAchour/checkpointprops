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

export default Player;
