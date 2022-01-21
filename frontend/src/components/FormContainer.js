import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../form.css";

const FormContainer = ({ children }) => {
  return (
    <Container className="form-container">
      <div className="screen">
        <div className="screen__content">
          <div>
            <Row className="justify-content-md-center">
              <Col xs={12} md={8}>
                {children}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FormContainer;
