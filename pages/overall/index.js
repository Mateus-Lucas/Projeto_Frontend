import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3Fill } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import Link from 'next/link'
import axios from 'axios'

const Index = () => {
  const [overall, setOverall] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/overall').then(resultado => {
      setOverall(resultado.data)
    })
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      axios.delete('/api/overall/' + id)
      getAll()
    }
  }

  function calcularSomaItem(item) {
    const soma =
      (parseInt(item.finalizacao || 0) +
        parseInt(item.passe || 0) +
        parseInt(item.velocidade || 0) +
        parseInt(item.drible || 0) +
        parseInt(item.defesa || 0) +
        parseInt(item.fisico || 0)) / 5

    return Math.floor(soma)
  }


  return (
    <Pagina titulo="overall">
      <Button href="/overall/form" className="mb-2" variant="primary">
        Novo
        <AiOutlinePlus />
      </Button>
      <Table striped bordered hover variant="light" className="champions-table">
        <thead>
          <tr>
            <th>Opções</th>
            <th>Casa</th>
            <td>#</td>
            <th>Visitante</th>
            <th>Fase</th>
            <th>Data</th>
            <th>Horário</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          {overall.map(item => (
            <tr key={item.id}>
              <td>
                <Link href={`/overall/${item.id}`}>
                  <BiEditAlt
                    title="Editar"
                    className="me-3 champions-icon"
                    style={{ cursor: 'pointer' }}
                  />
                </Link>
                <BsTrash3Fill
                  title="Excluir"
                  style={{ cursor: 'pointer' }}
                  onClick={() => excluir(item.id)}
                  className="text-primary champions-icon"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.posicao}</td>
              <td>{item.finalizacao}</td>
              <td>{item.passe}</td>
              <td>{item.velocidade}</td>
              <td>{item.drible}</td>
              <td>{item.defesa}</td>
              <td>{item.fisico}</td>
              <td>{calcularSomaItem(item)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Card className="fifa-card p-3">
        <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8THeqljBI7ZHDHoyd5O9HqtUXAVwqay0LjFUcaPAFC2wlmFlG9qj_lZtyd9Wr_SV4FXs&usqp=CAU" />
        <Card.Body>
          <Card.Title className="card-name">Nome do Jogador 1</Card.Title>
          <div className="card-bottom">
            <Button href={`/overall/1`} variant="primary" className="me-2">
              Editar <BiEditAlt />
            </Button>
            <Button variant="danger" onClick={() => excluir(1)}>
              Excluir <BsTrash3Fill />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Pagina>
  )
}

export default Index
