import Card from 'react-bootstrap/Card';
import "../App.css";

export default function TextComponent(props) {
    
  return (
    <>
    <Card>
      <Card.Body>
        <Card.Text as='div'>{props.value}</Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}