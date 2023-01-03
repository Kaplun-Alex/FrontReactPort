import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";


function HeaderComponent() {
  return (
    <header>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src='../public/images/face.jpg'
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    <br />

    </header>
  );
}

export default HeaderComponent;