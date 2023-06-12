import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import jogoValidator from '@/validators/jogoValidator'

const form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { push } = useRouter()
    const [equipes, setEquipes] = useState([]);

    useEffect(() => {
        getAll();
    }, []);

    function getAll() {
        axios.get('/api/equipes').then(resultado => {
            setEquipes(resultado.data);
        });
    }

    function salvar(dados) {

        axios.post('/api/jogos', dados)
        push('/jogos')

    }

    return (
        <Row>
            <Col xs={12} md={6}>
                <div>
                    <img
                        src="/images/Fundo2_UCL_Edited.jpg"
                        alt="Imagem"
                        className="custom-image"
                        style={{ objectFit: 'cover', height: '100vh' }}
                    />
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div style={{ backgroundColor: '#003399', padding: '20px', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src='/images/Logo_UCL.png' style={{ width: '30%', height: 'auto' }}></img>
                    </div>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="casa">
                                    <Form.Label style={{ color: 'white' }}>Casa:</Form.Label>
                                    <Form.Control
                                        as="select"
                                        isInvalid={errors.casa}
                                        isValid={!errors.casa}
                                        {...register('casa', jogoValidator.casa)}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                    >
                                        <option value="">Selecione o time da casa</option>
                                        {equipes.map((item, index) => (
                                            <option key={index} value={item.nome}>
                                                {item.nome}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.casa && <p style={{ color: 'red' }}>{errors.casa.message}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="visitante">
                                    <Form.Label style={{ color: 'white' }}>Visitante:</Form.Label>
                                    <Form.Control
                                        as="select"
                                        isInvalid={errors.visitante}
                                        isValid={!errors.visitante}
                                        {...register('visitante', jogoValidator.visitante)}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                    >
                                        <option value="">Selecione o time visitante</option>
                                        {equipes.map((item, index) => (
                                            <option key={index} value={item.nome}>
                                                {item.nome}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    {errors.visitante && <p style={{ color: 'red' }}>{errors.visitante.message}</p>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="data">
                                    <Form.Label style={{ color: 'white' }}>Data:</Form.Label>
                                    <Form.Control
                                        isInvalid={errors.data}
                                        isValid={!errors.data}
                                        type="date"
                                        {...register('data', jogoValidator.data)}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        placeholder="Digite a quantidade de títulos"
                                    />
                                    {errors.data && <p style={{ color: 'red' }}>{errors.data.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="horario">
                                    <Form.Label style={{ color: 'white' }}>Horário:</Form.Label>
                                    <Form.Control
                                        isInvalid={errors.horario}
                                        isValid={!errors.horario}
                                        type="time"
                                        {...register('horario', jogoValidator.horario)}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        placeholder="Digite a quantidade de jogadores"
                                    />
                                    {errors.horario && <p style={{ color: 'red' }}>{errors.horario.message}</p>}
                                </Form.Group>

                            </Col>
                        </Row>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <Link href="/jogos/" className="me-3">
                                <Button variant="success" onClick={handleSubmit(salvar)}>
                                    <HiCheck style={{ marginRight: '5px' }} />
                                    Salvar
                                </Button>
                            </Link>
                            <Link href="/jogos/">
                                <Button variant="danger">
                                    <HiArrowNarrowLeft style={{ marginRight: '5px' }} />
                                    Voltar
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}

export default form