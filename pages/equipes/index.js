import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsTrash3Fill } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';
import Link from 'next/link';
import axios from 'axios';
import Pagina from '@/components/Pagina';

const Index = () => {
  const [equipes, setEquipes] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get('/api/equipes').then(resultado => {
      setEquipes(resultado.data);
    });
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      axios.delete('/api/equipes/' + id);
      getAll();
    }
  }

  return (
    <Pagina>
      <div style={{ background: 'url(/images/bg_UCL.webp) center/cover no-repeat', minHeight: '100vh', margin: '0' }}>
        <br></br>
        <Container>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='text-white'>Equipes da UEFA Champions League</h3>
          </div>
          <br></br>
          <div className="champions-table-container">
            <Button href="/equipes/form" className="mb-2" variant="light">
              Novo Clube <AiOutlinePlus />
            </Button>
            <br></br>
            <Table striped bordered hover variant="light" className="champions-table">
              <thead>
                <tr>
                  <th>Opções</th>
                  <th>Nome</th>
                  <th>País</th>
                  <th>Títulos</th>
                  <th>Quantidade de jogadores</th>
                </tr>
              </thead>
              <tbody>
                {equipes.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Link href={'/equipes/' + item.id}>
                        <BiEditAlt
                          className="me-3 champions-icon"
                          style={{ cursor: 'pointer' }}
                        />
                      </Link>
                      <BsTrash3Fill
                        style={{ cursor: 'pointer' }}
                        onClick={() => excluir(item.id)}
                        className="text-danger champions-icon"
                      />
                    </td>
                    <td>{item.nome}</td>
                    <td>{item.pais}</td>
                    <td>{item.titulos}</td>
                    <td>{item.quant_jogadores}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </Pagina>
  );
};

export default Index;
