import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagina = (props) => {
  return (
    <>
         <div>

            <Cabecalho />
            <div>
                <h1>{props.titulo}</h1>
            </div>

                {props.children}

            <Rodape />
         </div>
        </>
  )
}

export default Pagina