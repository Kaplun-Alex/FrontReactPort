import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";


function HeaderComponent() {
  return (
    <header>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <p>Image</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    <br />

    </header>
  );
}

export default HeaderComponent;