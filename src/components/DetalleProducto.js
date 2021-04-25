import React, {Component} from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { instrumentos } from '../datos/instrumentos.json';
import camion from "../assets/images/camion.png";
//import images from "../assets/";

class DetalleProducto extends Component {

    constructor(){
        super();
        this.state = {
            instrumentos
        }
    }
    render(){
        console.log(this.props.params);
         const parametroId = this.props.match.params.id;
         const instrumentoEncontrado = instrumentos.filter(instrumento => instrumento.id === parametroId);
         const nav= instrumentoEncontrado[0].costoEnvio;
         console.log(nav);
        let texto;
        if(nav === "G") {
            texto = <p style={{ color:'green' }}><img style={{width: 20, height: 20}} src={camion} alt="d"></img>Envío gratis</p>
        } else {
            texto = <p style={{color:'orange'}}>Costo de Envío Interior de Argentina: ${nav}</p>
        }
         return (
             <React.Fragment>
                 <Navigation></Navigation>
                 <Container>
                 <Row>
                    <Col>
                        <Row>
                            <Col>
                            <img className="minAltoImg" src={require(`../assets/images/${instrumentoEncontrado[0].imagen}`).default} alt="d" />
                            </Col>
                        </Row>
                            <Col>
                            <p></p>
                            <p>Descripción:</p>
                            
                            <p>{instrumentoEncontrado[0].descripcion}</p>
                            </Col>
                    </Col>
                    <Col>
                         <Row>
                             <Col><h5>{instrumentoEncontrado[0].cantidadVendida} Vendidos</h5></Col>
                         </Row>
                         <Row>
                             <Col><h1>{instrumentoEncontrado[0].instrumento}</h1></Col>
                         </Row>
                         <Row>
                             <Col><h2>${instrumentoEncontrado[0].precio}</h2></Col>
                         </Row>
                         <Row>
                             <Col><p>Marca: {instrumentoEncontrado[0].marca}</p></Col>
                         </Row>
                         <Row>
                             <Col><p>Modelo: {instrumentoEncontrado[0].modelo}</p></Col>
                         </Row>
                         <Row>
                             <Col><p>Costo Envío</p> </Col>
                             
                         </Row>
                         <Row>
                             <Col nav={nav}>{texto}</Col>
                         </Row>
                         <Row>
                             <Col><Button variant="outline-primary">Agregar al carrito</Button></Col>
                         </Row>
                     </Col>
                     
                 </Row>
                 
                 <Row>
                     <Col><Button variant="primary" href="/products">Volver</Button></Col>
                 </Row>                
                 </Container>
             </React.Fragment>
             
         );
 
     }
}

export default DetalleProducto;