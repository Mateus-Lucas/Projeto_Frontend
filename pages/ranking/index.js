import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3Fill } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import Link from 'next/link'
import axios from 'axios'


const index = () => {

  const [ranking, setranking] = useState([])

  useEffect(() => {
    axios.get('/api/ranking').then(resultado => {
      setranking(resultado.data);
    })
  }, [])

  function getAll() {
    axios.get('/api/ranking').then(resultado => {
      setranking(resultado.data);
    })
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      axios.delete('/api/ranking/' + id)
      getAll()
    }
  }


  return (
    <Pagina titulo='ranking'>
      <Button href='/ranking/form' className='mb-2' variant="primary">Novo
        <AiOutlinePlus />
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Opções</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map(item => (
            <tr key={item.id}>
              <td>
                <Link href={'/ranking/' + item.id}>
                  <BiEditAlt className='me-3' style={{ cursor: 'pointer' }} />
                </Link>
                <BsTrash3Fill style={{ cursor: 'pointer' }}
                  onClick={() => excluir(item.id)} className='text-danger' />
              </td>
              <td>{item.nome}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  )
}

export default index