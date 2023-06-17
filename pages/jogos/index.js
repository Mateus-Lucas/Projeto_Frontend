import React, { useEffect, useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsTrash3Fill } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';
import Link from 'next/link';
import axios from 'axios';
import Pagina from '@/components/Pagina';
import FullCalendar from '@/components/FullCalendar';
import Rodape from '@/components/Rodape';

const Index = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    axios.get('/api/jogos').then(resultado => {
      setJogos(resultado.data.map(item => ({
        ...item,
      })));
    })
  }, []);

  function getAll() {
    axios.get('/api/jogos').then(resultado => {
      setJogos(resultado.data);
    })
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      axios.delete('/api/jogos/' + id);
      getAll();
    }
  }

  return (
    <Pagina>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/images/jogos.jpeg"
            style={{
              maxWidth: '100%',
              borderRadius: '5px',
              border: '4px solid white',
              width: '800px'
            }} />
        </div>
      </div>
      <br></br>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className='text-white'>Tabela de Jogos</h1>
      </div>
      <br></br>
      <div className="champions-table-container">
        <Button href="/jogos/form" className="mb-2" variant="light">
          Novo Jogo <AiOutlinePlus />
        </Button>
        <br></br>
        <Table striped bordered hover variant="light" className="champions-table">
          <thead>
            <tr>
              <th>Opções</th>
              <th>Casa</th>
              <td>#</td>
              <th>Visitante</th>
              <th>Fase</th>
              <th>Data</th>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody>
            {jogos.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/jogos/' + item.id}>
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
                <td>{item.casa}</td>
                <td>x</td>
                <td>{item.visitante}</td>
                <td>{item.fase}</td>
                <td>{item.data}</td>
                <td>{item.horario}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <br></br>
      <h3 className='text-white text-center'>Calendário de jogos</h3>
      <br></br>
      <Card className='p-3'>
        <FullCalendar />
      </Card>
      <br></br>
      <br></br>
      <br></br>
    </Pagina>
  );
};

export default Index;
