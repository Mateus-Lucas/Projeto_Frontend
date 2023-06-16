import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import overallValidator from '@/validators/overallValidator'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        if (query.id) {

            axios.get('/api/overall/' + query.id).then(resultado => {
                const overall = resultado.data

                for (let atributo in overall) {
                    setValue(atributo, overall[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/overall/' + query.id, dados)
        push('/overall')
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
                                            {...register('nome', overallValidator.nome)}
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
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="posicao">
                                        <Form.Label style={{ color: 'white' }}>posicao:</Form.Label>
                                        <Form.Control
                                            isInvalid={errors.posicao}
                                            isValid={!errors.posicao}
                                            as="select"
                                            {...register('posicao', overallValidator.nome)}
                                            style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                            placeholder="Selecione a posição do jogador"
                                        >  
                                            <option value="">Selecione uma opção</option>
                                            <option value="Atacante">ATA</option>
                                            <option value="Meio-Campo">MEI</option>
                                            <option value="Laterar">LAT</option>
                                            <option value="Zagueiro">ZAG</option>
                                            <option value="Goleiro">GOL</option>
                                        </Form.Control>
                                        {errors.posicao && <p style={{ color: 'red' }}>{errors.posicao.message}</p>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="finalizacao">
                                        <Form.Label style={{ color: 'white' }}>Finalização:</Form.Label>
                                        <Form.Control
                                            mask='99'
                                            isInvalid={errors.finalizacao}
                                            isValid={!errors.finalizacao}
                                            type="text"
                                            {...register('finalizacao', overallValidator.numero)}
                                            onChange={handleChange}
                                            style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                            placeholder="Digite o overall de Finalização"
                                        />
                                        {errors.finalizacao && <p style={{ color: 'red' }}>{errors.finalizacao.message}</p>}
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="passe">
                                        <Form.Label style={{ color: 'white' }}>Passe:</Form.Label>
                                        <Form.Control
                                            mask='99'
                                            isInvalid={errors.passe}
                                            isValid={!errors.passe}
                                            type="text"
                                            {...register('passe', overallValidator.numero)}
                                            onChange={handleChange}
                                            style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                            placeholder="Digite o overall do passe"
                                        />
                                        {errors.passe && <p style={{ color: 'red' }}>{errors.passe.message}</p>}
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="velocidade">
                                        <Form.Label style={{ color: 'white' }}>Velocidade:</Form.Label>
                                        <Form.Control
                                            mask='99'
                                            isInvalid={errors.velocidade}
                                            isValid={!errors.velocidade}
                                            type='text'
                                            {...register('velocidade', overallValidator.numero)}
                                            style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                            placeholder="Digite o overall da velocidade"
                                        />
                                        {errors.velocidade && <p style={{ color: 'red' }}>{errors.velocidade.message}</p>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="Drible">
                                        <Form.Label style={{ color: 'white' }}>Drible:</Form.Label>
                                        <Form.Control
                                            mask='99'
                                            isInvalid={errors.drible}
                                            isValid={!errors.drible}
                                            type="text"
                                            {...register('drible', overallValidator.numero)}
                                            onChange={handleChange}
                                            style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                            placeholder="Digite o overall do drible"
                                        />
                                        {errors.drible && <p style={{ color: 'red' }}>{errors.drible.message}</p>}
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="defesa">
                                        <Form.Label style={{ color: 'white' }}>Defesa:</Form.Label>
                                        <Form.Control
                                            isInvalid={errors.defesa}
                                            isValid={!errors.defesa}
                                            type="text"
                                            {...register('defesa', overallValidator.numero)}
                                            style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                            placeholder="Digite o overall da defesa"
                                        />
                                        {errors.defesa && <p style={{ color: 'red' }}>{errors.defesa.message}</p>}
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="fisico">
                                        <Form.Label style={{ color: 'white' }}>Fisico:</Form.Label>
                                        <Form.Control
                                            isInvalid={errors.fisico}
                                            isValid={!errors.fisico}
                                            type="text"
                                            {...register('fisico', overallValidator.numerofisico)}
                                            style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                                            placeholder="Digite o overall da fisico"
                                        />
                                        {errors.fisico && <p style={{ color: 'red' }}>{errors.fisico.message}</p>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                                <Link href="/overall/" className="me-3">
                                    <Button variant="success" onClick={handleSubmit(alterar)}>
                                        <HiCheck style={{ marginRight: '5px' }} />
                                        Alterar
                                    </Button>
                                </Link>
                                <Link href="/overall/">
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