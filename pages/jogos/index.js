import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3Fill } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import Link from 'next/link'
import axios from 'axios'


const index = () => {

  const [jogos, setjogos] = useState([])

  useEffect(() => {
    axios.get('/api/jogos').then(resultado => {
      setjogos(resultado.data);
    })
  }, [])

  function getAll() {
    axios.get('/api/jogos').then(resultado => {
      setjogos(resultado.data);
    })
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      axios.delete('/api/jogos/' + id)
      getAll()
    }
  }


  return (
    <Pagina>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='text-white'>tabela de Jogos</h3>
      </div>
      <br></br>
      <div className="champions-table-container">
        <Button href="/jogos/form" className="mb-2" variant="light">
          Novo Jogo <AiOutlinePlus />
        </Button>
        <br></br>
        <Table striped bordered hover variant="light" className="champions-table">
          <thead>
            <tr>
              <th>Opções</th>
              <th>Casa</th>
              <td>#</td>
              <th>Visitante</th>
              <th>Data</th>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody>
            {jogos.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/jogos/' + item.id}>
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
                <td>{item.casa}</td>
                <td>x</td>
                <td>{item.visitante}</td>
                <td>{item.data}</td>
                <td>{item.horario}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Pagina>
  )
}

export default index