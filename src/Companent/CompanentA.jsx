import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/myteam.svg';
import '../Companent/companent.css';
import BackImg from '../assets/headerB.png';
import BackImg2 from '../assets/backimg2.png';
function NavScrollExample() {
  return (
    <header className='header'>
      <Navbar expand="lg">
        <Container >
          <Navbar.Brand href="#"><img src={Logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">home</Nav.Link>
              <Nav.Link href="#action2">about</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success"><a href="tel:+998995183709">contact us</a></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="hero">
        <div className="container">
          <div className="hero1"></div>
          <img src={BackImg} className="backimg" alt="img" />
          {/* <img src={BackImg2} className="backimg2" alt="img" /> */}
          <div className="hero__card">
            <h1>Find the best <span>talent</span></h1>
            <div className="hero__card-box">
              <hr />
              <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
            </div>
          </div>
          
        </div>
       
      </div>
    </header>
    
  );
}

export default NavScrollExample;

