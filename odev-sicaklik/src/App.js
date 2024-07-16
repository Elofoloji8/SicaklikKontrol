import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Celcius from "./components/Celcius";
import Fahrenheit from "./components/Fahrenheit";
import Kelvin from "./components/Kelvin";


const App = () => {
  const [celcius, setCelsius] = useState(2);

  return (
    <div style={{margin:20, justifyContent: "center" }}>
      <Container>
        <Row>
          <center>
            <h1>Termometre çeşitleri</h1>
          </center>
          <h2>Hava sıcaklığı: {celcius} derece</h2>

          <Col xs="4">
            <Button 
              color="danger"
              style={{maxWidth: 125, marginleft: 10}}
              onClick={() => setCelcius(celcius +1)}
            >
              sıcaklığı artır
            </Button>
          </Col>

          <Col xs="4">
            <Button 
              color="success"
              style={{ maxWidth: 150, marginleft: 10}}
              onClick={() => setCelcius(celcius - 1)}
            >
              sıcaklığı azalt
            </Button>
          </Col>
          <h3>farklı birimlerde sıcaklık</h3>
          <Col>
            <h4><Celcius derece={celcius} /></h4>
          </Col>
          <Col>
            <h4><Fahrenheit derece={celcius} /></h4>
          </Col>
          <Col>
            <h4><Kelvin derece={celcius} /></h4>
          </Col>
        </Row>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

      </Container>
    </div>
  );

};


export default App;



