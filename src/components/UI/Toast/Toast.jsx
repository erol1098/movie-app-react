import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

const ShowToast = ({ flag, title, message }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    flag && setShow(true);
  }, [flag]);
  return (
    <Row>
      <Col xs={6}>
        <ToastContainer className="mt-5 me-5" position={"top-end"}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
};

export default ShowToast;
