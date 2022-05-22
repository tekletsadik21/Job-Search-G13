import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function LoginPage() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("");
            setLoading(true);
            history("/");
        } catch {
            setError("Failed to log in");
        }

        setLoading(false)
    }

    return (
        <>
            <Container>
                <Content>
                    <Logo>
                        <a href={"/home"}>
                            <img src={"/assets/images/Home/home-logo.svg"} alt={""} width={'50px'}/>
                        </a>
                    </Logo>
                </Content>
            </Container>
            <CardBox>
                <Card className={" col-lg-3 col-sm-12 shadow"}>
                    <Card.Body >
                        <h2 className="text-center mb-4">Sign in</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="my-4 w-100" type="submit">
                                Log In
                            </Button>
                        </Form>
                        <div className="w-100 text-center mt-3 ">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </Card.Body>
                </Card>
                <div className="col-lg-3 col-sm-12 text-center mt-2">
                    New to Omotic? <Link to="/signup">Sign Up</Link>
                </div>
            </CardBox>
        </>
    )
}
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0 ,0, 0.09);
  padding: 0 24px;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  max-width: 1128px;
  margin: 0 auto;
`;

const Logo = styled.a`
  
`;

const CardBox = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg width='38' height='38' viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='bevel-circle' fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M10.414 29l-8 8h33.172l-8-8H10.414zM9 27.586l-8 8V2.414l8 8v17.172zM10.414 9l-8-8h33.172l-8 8H10.414zM29 10.414l8-8v33.172l-8-8V10.414zM11 11h16v16H11V11zm8 14c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM0 0h38v38H0V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100%;
  height: 100vh;
  padding: 90px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px){
    #card-box{
      width: 100%;
    }
  }
`;
