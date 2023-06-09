import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import jogoValidator from '@/validators/jogoValidator'

const form = () => {

    const { register, handleSubmit, formState: {errors} } = useForm()
    const { push } = useRouter()

    function salvar(dados) {

        axios.post('/api/jogos', dados)
        push('/jogos')

    }

    return (
        <Pagina titulo='jogos'>
            <Form>
                <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} isValid={!errors.nome} type="text" {...register('nome', jogoValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Link href='/jogos/' className='me-3'>
                        <Button variant="success" onClick={handleSubmit(salvar)}>
                            <HiCheck />
                            Salvar
                        </Button>
                    </Link>
                    <Link href='/jogos/'>
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