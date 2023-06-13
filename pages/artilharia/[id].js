import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import artilhariaValidator from '@/validators/artilhariaValidator'
import { mask } from 'remask'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const [equipes, setEquipes] = useState([]);
    const [jogadores, setJogadores] = useState([]);

    useEffect(() => {
        getAll1();
        getAll2();
    }, []);

    function getAll1() {
        axios.get('/api/equipes').then(resultado => {
            setEquipes(resultado.data);
        });
    }

    function getAll2() {
        axios.get('/api/jogadores').then(resultado => {
            setJogadores(resultado.data);
        });
    }

    useEffect(() => {
        if (query.id) {

            axios.get('/api/artilharia/' + query.id).then(resultado => {
                const artilharia = resultado.data

                for (let atributo in artilharia) {
                    setValue(atributo, artilharia[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/artilharia/' + query.id, dados)
        push('/artilharia')
    }
    
    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
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
                                    <Form.Label style={{ color: 'white' }}>Nome do Jogador:</Form.Label>
                                    <Form.Control
                                        as="select"
                                        isInvalid={errors.nome}
                                        isValid={!errors.nome}
                                        type="text"
                                        {...register('nome', artilhariaValidator.nome)}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                    >
                                        <option value="">Selecione o Jogador</option>
                                        {jogadores.map((item, index) => (
                                            <option key={index} value={item.nome}>
                                                {item.nome}
                                            </option>
                                        ))}
                                    </Form.Control>

                                    {errors.nome && <p style={{ color: 'red' }}>{errors.nome.message}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="equipe">
                                    <Form.Label style={{ color: 'white' }}>Equipe:</Form.Label>
                                    <Form.Control
                                        as="select"
                                        isInvalid={errors.equipe}
                                        isValid={!errors.equipe}
                                        type="text"
                                        {...register('equipe', artilhariaValidator.equipe)}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                    >
                                        <option value="">Selecione a equipe</option>
                                        {equipes.map((item, index) => (
                                            <option key={index} value={item.nome}>
                                                {item.nome}
                                            </option>
                                        ))}
                                    </Form.Control>

                                    {errors.equipe && <p style={{ color: 'red' }}>{errors.equipe.message}</p>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="gols">
                                    <Form.Label style={{ color: 'white' }}>Quantidade de gols:</Form.Label>
                                    <Form.Control
                                        mask='99'
                                        isInvalid={errors.gols}
                                        isValid={!errors.gols}
                                        type="text"
                                        {...register('gols', artilhariaValidator.gols)}
                                        onChange={handleChange}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        placeholder="Digite a quantidade de gols"
                                    />
                                    {errors.gols && <p style={{ color: 'red' }}>{errors.gols.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="quant_jogos">
                                    <Form.Label style={{ color: 'white' }}>Quantidade de jogos:</Form.Label>
                                    <Form.Control
                                        mask='99'
                                        isInvalid={errors.quant_jogos}
                                        isValid={!errors.quant_jogos}
                                        type="text"
                                        {...register('quant_jogos', artilhariaValidator.quant_jogos)}
                                        onChange={handleChange}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        placeholder="Digite a quantidade de jogos"
                                    />
                                    {errors.quant_jogos && <p style={{ color: 'red' }}>{errors.quant_jogos.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="assistencias">
                                    <Form.Label style={{ color: 'white' }}>Assistências:</Form.Label>
                                    <Form.Control
                                        mask='99'
                                        isInvalid={errors.assistencias}
                                        isValid={!errors.assistencias}
                                        type="text"
                                        {...register('assistencias', artilhariaValidator.assistencias)}
                                        onChange={handleChange}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        placeholder="Digite a quantidade de assistências"
                                    />
                                    {errors.assistencias && <p style={{ color: 'red' }}>{errors.assistencias.message}</p>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <Link href="/artilharia/" className="me-3">
                                <Button variant="success" onClick={handleSubmit(alterar)}>
                                    <HiCheck style={{ marginRight: '5px' }} />
                                    Alterar
                                </Button>
                            </Link>
                            <Link href="/artilharia/">
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