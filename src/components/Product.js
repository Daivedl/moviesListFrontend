import React, { Component } from 'react';
import Navigation from './Navigation';
import {instrumentos} from '../datos/instrumentos.json';
import Tarjeta from './Tarjeta'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Product extends Component {

    constructor(){
        super();
        this.state = {
            instrumentos
        }
    }

    render(){
        const instrumentos = this.state.instrumentos.map((instrumento, i) =>{ return (
            <Tarjeta key={instrumento.id} id={instrumento.id} instrumento={instrumento.instrumento}
            marca={instrumento.marca}
            modelo={instrumento.modelo}
            imagen={instrumento.imagen}
            precio={instrumento.precio}
            costoEnvio={instrumento.costoEnvio}
            cantidadVendida={instrumento.cantidadVendida}
            //descripcion={instrumento.descripcion}
            >

            </Tarjeta>
        );
    });
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <Container fluid="md">
                    <Row>
                        {instrumentos}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }

}

export default Product;