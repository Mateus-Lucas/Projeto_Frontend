import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3Fill } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import Link from 'next/link'
import axios from 'axios'


const index = () => {

  const [jogadores, setjogadores] = useState([])
  const [equipes, setEquipes] = useState([])

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get('/api/jogadores').then(resultado => {
      setjogadores(resultado.data);
    })
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      axios.delete('/api/jogadores/' + id)
      getAll()
    }
  }


  return (
    <Pagina>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='text-white'>Jogadores da UEFA Champions League</h3>
      </div>
      <br></br>
      <div className="champions-table-container">
        <Button href="/jogadores/form" className="mb-2" variant="light">
          Novo Jogador <AiOutlinePlus />
        </Button>
        <br></br>
        <Table striped bordered hover variant="light" className="champions-table">
          <thead>
            <tr>
              <th>Opções</th>
              <th>Nome</th>
              <th>Idade</th>
              <th>Posição</th>
              <th>Altura</th>
              <th>Equipe</th>
            </tr>
          </thead>
          <tbody>
            {jogadores.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/jogadores/' + item.id}>
                    <BiEditAlt title='Editar'
                      className="me-3 champions-icon"
                      style={{ cursor: 'pointer' }}
                    />
                  </Link>
                  <BsTrash3Fill title='Excluir'
                    style={{ cursor: 'pointer' }}
                    onClick={() => excluir(item.id)}
                    className="text-primary champions-icon"
                  />
                </td>
                <td>{item.nome}</td>
                <td>{item.idade}</td>
                <td>{item.posicao}</td>
                <td>{item.altura}</td>
                <td>{item.equipe}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Pagina>
  )
}

export default index