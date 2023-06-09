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
import equipeValidator from '@/validators/equipeValidator'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    useEffect(() => {
        if (query.id) {

            axios.get('/api/equipes/' + query.id).then(resultado => {
                const equipe = resultado.data

                for (let atributo in equipe) {
                    setValue(atributo, equipe[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/equipes/' + query.id, dados)
        push('/equipes')
    }

    return (
        <Pagina titulo='equipes'>
            <Form>
                <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} isValid={!errors.nome} type="text" {...register('nome', equipeValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Link href='/equipes/' className='me-3'>
                        <Button variant="success" onClick={handleSubmit(alterar)}>
                            <HiCheck />
                            Salvar
                        </Button>
                    </Link>
                    <Link href='/equipes/'>
                        <Button variant='danger'>
                            <HiArrowNarrowLeft />
                            Voltar
                        </Button>
                    </Link>
                </div>

            </Form>
        </Pagina>

    )
}

export default form