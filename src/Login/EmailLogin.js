import React, { useState } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PasswordModal from "./PasswordModal";
import { formatPhoneNumber } from "../helper";
import { red, pillButton, boldSmall, hidden, small } from "../styles";

export default function EmailLogin() {
  const navigate = useNavigate();
  const [passModal, setpassModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const submitForm = async () => {
    setShowSpinner(true);
    if (email === "" || password === "") {
      setErrorMessage("Please fill out all fields");
      return;
    }

    const user = {
      email: email,
      password: password,
    };
    // const response = await post("/login", user);
    // if (response.code !== 200) {
    //   setErrorMessage(response.message);
    //   setShowSpinner(false);
    //   return;
    //   // add validation
    // }
  };

  const submitSignUpForm = async () => {
    if (email === "" || password === "") {
      setErrorMessage("Please fill out all fields");
      return;
    }
    const user = {
      email: email,
      password: password,
    };
    // const response = await post("/login", user);
    // if (response.code !== 200) {
    //   setErrorMessage(response.message);
    //   return;
    //   // add validation
    // } else {
    // }
  };
  const onReset = async () => {
    // const response = await post("/set_temp_password", { email: email });
    // if (response.message === "A temporary password has been sent") {
    //   // console.log(response);
    //   setpassModal(true);
    // } else if (response.code === 280) {
    //   // console.log(response);
    //   alert("No account found with that email.");
    // }
  };
  const onCancel = () => {
    setpassModal(false);
  };
  const required =
    errorMessage === "Please fill out all fields" ? (
      <span style={red} className="ms-1">
        *
      </span>
    ) : (
      ""
    );
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center ">
      {<PasswordModal isOpen={passModal} onCancel={onCancel} />}
      <Row className="m-5">Email Login </Row>
      <Row className="w-100">
        <Col></Col>
        <Col>
          <Form>
            <Form.Group className="mx-2 my-3">
              <Form.Label as="h5" className="mb-0 ms-1">
                Email Address {email === "" ? required : ""}
              </Form.Label>
              <Form.Control
                style={{ borderRadius: 0 }}
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mx-2 my-3">
              <Form.Label as="h5" className="mb-0 ms-1">
                Password {password === "" ? required : ""}
              </Form.Label>
              <Form.Control
                style={{ borderRadius: 0 }}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
          <div className="text-center pt-1 pb-2">
            <div className="text-center mb-4">
              <p style={boldSmall} onClick={onReset}>
                Forgot Password?
              </p>
            </div>
            {showSpinner ? (
              <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <ReactBootStrap.Spinner animation="border" role="status" />
              </div>
            ) : (
              ""
            )}
            <Button variant="outline-primary" onClick={submitForm}>
              Login
            </Button>
          </div>
          <div
            className="text-center"
            style={errorMessage === "" ? hidden : {}}
          >
            <p style={{ ...red, ...small }}>{errorMessage || "error"}</p>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
