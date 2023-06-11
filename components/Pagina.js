import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Pagina = (props) => {
  return (
    <>
         <div>

            <Cabecalho />

            <div style={{ background: 'url(/images/bg_UCL.webp) center/cover no-repeat', minHeight: '100vh', margin: '0' }}>
               <Container>
                {props.children}
               </Container> 
            </div>
            <Rodape />
         </div>
        </>
  )
}

export default Pagina