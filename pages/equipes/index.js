import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
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
      <br></br>
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
                    <BiEditAlt title='Editar'
                      className="me-3 champions-icon"
                      style={{ cursor: 'pointer' }}
                    />
                  </Link>
                  <BsTrash3Fill title='Excluir'
                    style={{ cursor: 'pointer' }}
                    onClick={() => excluir(item.id)}
                    className="text-primary champions-icon"
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
    </Pagina>
  );
};

export default Index;
