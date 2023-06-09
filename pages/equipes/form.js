import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import equipeValidator from '@/validators/equipeValidator'

const Formulario = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { push } = useRouter()

    function salvar(dados) {
        axios.post('/api/equipes', dados)
        push('/equipes')
    }

    return (
        <>
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
                                    <Form.Group className="mb-3" controlId="nome">
                                        <Form.Label style={{ color: 'white' }}>Nome:</Form.Label>
                                        <Form.Control
                                            isInvalid={errors.nome}
                                            isValid={!errors.nome}
                                            type="text"
                                            {...register('nome', equipeValidator.nome)}
                                            style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                            placeholder="Digite o nome"
                                        />
                                        {errors.nome && <p style={{ color: 'red' }}>{errors.nome.message}</p>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="pais">
                                        <Form.Label style={{ color: 'white' }}>País:</Form.Label>
                                        <Form.Control
                                            isInvalid={errors.pais}
                                            isValid={!errors.pais}
                                            type="text"
                                            {...register('pais', equipeValidator.pais)}
                                            style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                            placeholder="Digite o país"
                                        />
                                        {errors.pais && <p style={{ color: 'red' }}>{errors.pais.message}</p>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="titulos">
                                        <Form.Label style={{ color: 'white' }}>Títulos:</Form.Label>
                                        <Form.Control
                                            isInvalid={errors.titulos}
                                            isValid={!errors.titulos}
                                            type="text"
                                            {...register('titulos', equipeValidator.titulos)}
                                            style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                            placeholder="Digite a quantidade de títulos"
                                        />
                                        {errors.titulos && <p style={{ color: 'red' }}>{errors.titulos.message}</p>}
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="quant_jogadores">
                                        <Form.Label style={{ color: 'white' }}>Quantidade de jogadores:</Form.Label>
                                        <Form.Control
                                            isInvalid={errors.quant_jogadores}
                                            isValid={!errors.quant_jogadores}
                                            type="text"
                                            {...register('quant_jogadores', equipeValidator.quant_jogadores)}
                                            style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                            placeholder="Digite a quantidade de jogadores"
                                        />
                                        {errors.quant_jogadores && <p style={{ color: 'red' }}>{errors.quant_jogadores.message}</p>}
                                    </Form.Group>

                                </Col>
                            </Row>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <Link href="/equipes/" className="me-3">
                                    <Button variant="success" onClick={handleSubmit(salvar)}>
                                        <HiCheck style={{ marginRight: '5px' }} />
                                        Salvar
                                    </Button>
                                </Link>
                                <Link href="/equipes/">
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
        </>
    )
}

export default Formulario
