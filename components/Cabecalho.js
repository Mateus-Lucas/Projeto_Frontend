import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cabecalho = () => {
    return (
        <>
            <style jsx>{`
                .custom-navbar {
                    margin-bottom: 0;
                }

                .custom-image-container {
                    margin-top: 0;
                    width: 100%;
                    height: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .custom-image {
                    width: 100%;
                    height: auto;
                }
            `}</style>

            <Navbar bg="dark" variant="dark" className="custom-navbar">
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
            <div className="custom-image-container">
                <img src="/images/Fundo_UCL.png" alt="Imagem" className="custom-image" />
            </div>
        </>
    );
};

export default Cabecalho;