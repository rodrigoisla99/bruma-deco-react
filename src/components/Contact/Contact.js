import React from "react";
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert';
import './Contact.css'

const mostrarAlerta = () => {
  swal("Enviado correctamente");
}

const Contact = () => {
    return (
    <>
        <hr></hr>
        <Form className="form-contact">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="password"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>¿Cuál es tu consulta?</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>

            <div className="enviar-contacto">
              <Button onClick={mostrarAlerta} className="send-contact" variant="primary" type="submit" >
                Enviar
            </Button> 
            </div>
        </Form>

        <hr></hr>

    <Accordion className="accordion" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> ¿Cómo se realizan las compras?</Accordion.Header>
        <Accordion.Body>
        <strong>Hacé el pedido a través de la web.</strong> Una vez que lo completes, nos llegará la solicitud y nos pondremos en contacto al mail o teléfono que brindaste para finalizar la compra.
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header> ¿Cómo puedo abonar mis compras?</Accordion.Header>
        <Accordion.Body>
        <strong>Aceptamos todos los medios de pago.</strong> Puede ser efectivo, transferencia o cualquier tarjeta a través de Mercado Pago. Recordá que abonando en efectivo o transferencia dispones un 10% de descuento.
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="2">
        <Accordion.Header>¿Cómo se realizan los envios?</Accordion.Header>
        <Accordion.Body>
        <strong>Los envíos se realizan martes y jueves.</strong> En Bariloche se acuerda un punto de entrega y para otra parte del país, se hace a través de correo privado previa coordinacion con el comprador.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header> ¿Tienen cambio los productos?</Accordion.Header>
        <Accordion.Body>
        <strong>Si, los productos tienen cambio.</strong> Ante una falla del producto o un error en el envio, se puede realizar cualquier tipo de cambio hasta 15 días después de recibida la compra.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>

    </>
  );
}

export default Contact;