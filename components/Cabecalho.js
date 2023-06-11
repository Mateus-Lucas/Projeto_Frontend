import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cabecalho = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="custom-navbar" >
                <Container>
                    <Nav className="mx-auto">
                        <Navbar.Brand href="#home">Inicio</Navbar.Brand>
                        <Nav.Link href="/equipes">Equipes</Nav.Link>
                        <Nav.Link href="/jogadores">Jogadores</Nav.Link>
                        <Nav.Link href="/jogos">Jogos</Nav.Link>
                        <Nav.Link href="/artilharia">Artilharia</Nav.Link>
                        <Nav.Link href="/ranking">Ranking</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Cabecalho;