import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import jogadorValidator from '@/validators/jogadorValidator'
import { mask } from 'remask';

const form = () => {
    const { register, handleSubmit, formState: { errors }, setValue  } = useForm()
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

        axios.post('/api/jogadores', dados)
        push('/jogadores')

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
                                    <Form.Label style={{ color: 'white' }}>Nome:</Form.Label>
                                    <Form.Control
                                        isInvalid={errors.nome}
                                        isValid={!errors.nome}
                                        type="text"
                                        {...register('nome', jogadorValidator.nome)}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        placeholder="Digite o nome do jogador"
                                    />
                                    {errors.nome && <p style={{ color: 'red' }}>{errors.nome.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="equipe">
                                    <Form.Label style={{ color: 'white' }}>Equipe:</Form.Label>
                                    <Form.Control
                                        as="select"
                                        isInvalid={errors.equipe}
                                        isValid={!errors.equipe}
                                        {...register('equipe', jogadorValidator.equipe)}
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
                                <Form.Group className="mb-3" controlId="posicao">
                                    <Form.Label style={{ color: 'white' }}>Posição:</Form.Label>
                                    <Form.Control
                                        as="select"
                                        isInvalid={errors.posicao}
                                        isValid={!errors.posicao}
                                        {...register('posicao', jogadorValidator.posicao)}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        placeholder="Selecione a posição do jogador"
                                    >
                                        <option value="Atacante">Atacante</option>
                                        <option value="Meio-Campo">Meio-Campo</option>
                                        <option value="Laterar">Lateral</option>
                                        <option value="Zagueiro">Zagueiro</option>
                                        <option value="Goleiro">Goleiro</option>
                                    </Form.Control>
                                    {errors.posicao && <p style={{ color: 'red' }}>{errors.posicao.message}</p>}
                                </Form.Group>

                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="contato">
                                    <Form.Label style={{ color: 'white' }}>Contato:</Form.Label>
                                    <Form.Control
                                        mask='(99) 9.9999-9999'
                                        isInvalid={errors.contato}
                                        isValid={!errors.contato}
                                        type="text"
                                        {...register('contato', jogadorValidator.contato)}
                                        onChange={handleChange}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        placeholder="Digite o contato do jogador"
                                    />
                                    {errors.contato && <p style={{ color: 'red' }}>{errors.contato.message}</p>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="idade">
                                    <Form.Label style={{ color: 'white' }}>Idade:</Form.Label>
                                    <Form.Control
                                        mask='99'
                                        isInvalid={errors.idade}
                                        isValid={!errors.idade}
                                        type="text"
                                        {...register('idade', jogadorValidator.idade)}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        onChange={handleChange}
                                        placeholder="Digite a Idade do Jogador"
                                    />
                                    {errors.idade && <p style={{ color: 'red' }}>{errors.idade.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="altura">
                                    <Form.Label style={{ color: 'white' }}>Altura:</Form.Label>
                                    <Form.Control
                                        mask='9.99 (m)'
                                        isInvalid={errors.altura}
                                        isValid={!errors.altura}
                                        type="text"
                                        {...register('altura', jogadorValidator.altura)}
                                        onChange={handleChange}
                                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                        placeholder="Digite a Altura do jogador"
                                    />
                                    {errors.altura && <p style={{ color: 'red' }}>{errors.altura.message}</p>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <Link href="/jogadores/" className="me-3">
                                <Button variant="success" onClick={handleSubmit(salvar)}>
                                    <HiCheck style={{ marginRight: '5px' }} />
                                    Salvar
                                </Button>
                            </Link>
                            <Link href="/jogadores/">
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