import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
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

  const rows = Math.ceil(overall.length / 4)

  return (
    <Pagina titulo="overall">
      <br></br>
      <h1 className='text-white text-center'>Overall</h1>
      <Button href="/overall/form" className="mb-2" variant="light">
        <b>Cadastrar Overall de Jogador</b>
        {' '}<AiOutlinePlus />
      </Button>
      <br></br>
      <br></br>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <Row key={rowIndex}>
          {Array.from({ length: 4 }).map((_, colIndex) => {
            const index = rowIndex * 4 + colIndex
            const item = overall[index]
            if (item) {
              return (
                <Col key={item.id}>
                  <Card className='mb-2' style={{ maxWidth: '200px' }}>
                    <Row className='m-2'>
                      <Col>
                        <Card.Title>{calcularSomaItem(item)}</Card.Title>
                      </Col>
                      <Col>
                        <Card.Title>{item.posicao}</Card.Title>
                      </Col>
                    </Row>
                    <Card.Img
                      src='https://img.freepik.com/vetores-premium/silhueta-negra-de-um-jogador-de-futebol-correndo-com-a-bola_566661-3599.jpg?w=2000'
                    />
                    <Card.Body>
                      <Card.Title className='text-center'>{item.nome}</Card.Title>
                      <Row>
                        <Col>
                          <Card.Text><b>VEL</b> {item.velocidade}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text><b>DRI</b> {item.drible}</Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Card.Text><b>FIN</b> {item.finalizacao}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text><b>DEF</b> {item.defesa}</Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Card.Text><b>PAS</b> {item.passe}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text><b>FIS</b> {item.fisico}</Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <Row className='m-1'>
                    <Col>
                      <Link href={`/overall/${item.id}`}>
                        <Button className='bg-light' style={{ cursor: 'pointer' }}>
                          <BiEditAlt
                            title="Editar"
                            className="me-3 champions-icon text-primary"
                            style={{ cursor: 'pointer' }}
                          />
                        </Button>
                      </Link>
                    </Col>
                    <Col>
                      <Button className='bg-light' style={{ cursor: 'pointer' }}>
                        <BsTrash3Fill
                          title="Excluir"
                          onClick={() => excluir(item.id)}
                          className="text-primary champions-icon"
                        />
                      </Button>
                    </Col>
                  </Row>
                  <br></br>
                  <br></br>
                </Col>
              )
            } else {
              return <Col key={colIndex} />
            }
          })}
        </Row>
      ))}
    </Pagina>
  )
}

export default Index
