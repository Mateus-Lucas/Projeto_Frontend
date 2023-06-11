import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import jogadorValidator from '@/validators/jogadorValidator'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        if (query.id) {

            axios.get('/api/jogadores/' + query.id).then(resultado => {
                const jogadore = resultado.data

                for (let atributo in jogadore) {
                    setValue(atributo, jogadore[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/jogadores/' + query.id, dados)
        push('/jogadores')
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
                                <Form.Group className="mb-3" controlId="nome">
                                    <Form.Label style={{ color: 'white' }}>Nome:</Form.Label>
                                    <Form.Control
                                        isInvalid={errors.nome}
                                        isValid={!errors.nome}
                                        type="text"
                                        {...register('nome', jogadorValidator.nome)}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        placeholder="Digite o nome"
                                    />
                                    {errors.nome && <p style={{ color: 'red' }}>{errors.nome.message}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="posicao">
                                    <Form.Label style={{ color: 'white' }}>Posição:</Form.Label>
                                    <Form.Control
                                        isInvalid={errors.posicao}
                                        isValid={!errors.posicao}
                                        type="text"
                                        {...register('posicao', jogadorValidator.posicao)}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        placeholder="Digite a posição do jogador"
                                    />
                                    {errors.posicao && <p style={{ color: 'red' }}>{errors.posicao.message}</p>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="idade">
                                    <Form.Label style={{ color: 'white' }}>Idade:</Form.Label>
                                    <Form.Control
                                        isInvalid={errors.idade}
                                        isValid={!errors.idade}
                                        type="text"
                                        {...register('idade', jogadorValidator.idade)}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        placeholder="Digite a Idade do Jogador"
                                    />
                                    {errors.idade && <p style={{ color: 'red' }}>{errors.idade.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="altura">
                                    <Form.Label style={{ color: 'white' }}>Altura:</Form.Label>
                                    <Form.Control
                                        isInvalid={errors.altura}
                                        isValid={!errors.altura}
                                        type="text"
                                        {...register('altura', jogadorValidator.altura)}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        placeholder="Digite a Altura do jogador"
                                    />
                                    {errors.altura && <p style={{ color: 'red' }}>{errors.altura.message}</p>}
                                </Form.Group>
                            </Col>
                            <Form.Group className="mb-3" controlId="equipe">
                                <Form.Label style={{ color: 'white' }}>Equipe:</Form.Label>
                                <Form.Control
                                    isInvalid={errors.equipe}
                                    isValid={!errors.equipe}
                                    type="text"
                                    {...register('equipe', jogadorValidator.equipe)}
                                    style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                    placeholder="Digite o país"
                                />
                                {errors.equipe && <p style={{ color: 'red' }}>{errors.equipe.message}</p>}
                            </Form.Group>
                        </Row>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <Link href="/jogadors/" className="me-3">
                                <Button variant="success" onClick={handleSubmit(alterar)}>
                                    <HiCheck style={{ marginRight: '5px' }} />
                                    Salvar
                                </Button>
                            </Link>
                            <Link href="/jogadors/">
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