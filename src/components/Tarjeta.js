import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import camion from "../assets/images/camion.png";


class Tarjeta extends Component {
    render() {
        const nOv = this.props.costoEnvio;
        let texto;
        if (nOv === 'G') {
            texto = <p style={{ color: 'green' }}><img style={{ width: 20, height: 20 }} src={camion} alt="d"></img>Envío gratis a todo el país</p>
        } else {
            texto = <p style={{ color: 'orange' }}>Costo de Envío Interior de Argentina: ${this.props.costoEnvio}</p>
        }
        

        return (
            <React.Fragment>
                <Card style={{ width: '18rem' }} className="margenesTarjeta">
                    <Card.Img variant="top"  src={require(`../assets/images/${this.props.imagen}`).default} height={200} width={200} />
                    <Card.Body>
                        <Card.Title></Card.Title>

                        <Card.Text nOv={nOv} >
                            <p>{this.props.instrumento}</p>
                            <p>${this.props.precio}</p>
                            {texto}
                            <p>{this.props.cantidadVendida} vendidos</p>
                        </Card.Text>



                        <Button href={`products/${this.props.id}`} variant="primary">Detalle</Button>
                    </Card.Body>

                </Card>
            </React.Fragment>
        );
    }
}
export default Tarjeta;