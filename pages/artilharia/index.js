import Pagina from '@/components/Pagina';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsTrash3Fill } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';
import Link from 'next/link';
import axios from 'axios';

const Index = () => {
  const [artilharia, setArtilharia] = useState([]);
  const [classificacao, setClassificacao] = useState([]);
  const [colunaOrdenacao, setColunaOrdenacao] = useState('gols');

  useEffect(() => {
    axios.get('/api/artilharia').then((resultado) => {
      setArtilharia(resultado.data);
    });
  }, []);

  useEffect(() => {
    ordenar();
  }, [artilharia, colunaOrdenacao]);

  function getAll() {
    axios.get('/api/artilharia').then((resultado) => {
      setArtilharia(resultado.data);
    });
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      axios.delete('/api/artilharia/' + id);
      getAll();
    }
  }

  function ordenar() {
    const artilhariaOrdenada = [...artilharia].sort((a, b) =>
      b[colunaOrdenacao] - a[colunaOrdenacao]
    );
    setClassificacao(artilhariaOrdenada);
  }

  return (
    <Pagina>
      <br />
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/images/artilharia.jpg"
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
        <h1 className="text-white">Artilharia da UEFA Champions League</h1>
      </div>
      <br />
      <div className="champions-table-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>
            <Button href="/artilharia/form" className="mb-2" variant="light">
              Novo jogador <AiOutlinePlus />
            </Button>
          </div>
          <div>
            <Button
              variant="light"
              onClick={() => setColunaOrdenacao('gols')}
            >
              Ordenar por Gols
            </Button>
            {' '}
            <Button
              variant="light"
              onClick={() => setColunaOrdenacao('assistencias')}
            >
              Ordenar por Assistências
            </Button>
          </div>
        </div>
        <Table striped bordered hover variant="light" className="champions-table">
          <thead>
            <tr>
              <th>Opções</th>
              <th>Posição</th>
              <th>Nome do Jogador</th>
              <th>Equipe</th>
              <th>Gols</th>
              <th>Assistências</th>
              <th>Jogos</th>
            </tr>
          </thead>
          <tbody>
            {classificacao.map((item, index) => {
              const posicao = index + 1;
              return (
                <tr key={item.id}>
                  <td>
                    <Link href={'/artilharia/' + item.id}>
                      <BiEditAlt className="me-3 champions-icon" style={{ cursor: 'pointer' }} title='Editar' />
                    </Link>
                    <BsTrash3Fill title='Excluir'
                      style={{ cursor: 'pointer' }}
                      onClick={() => excluir(item.id)}
                      className="text-primary champions-icon"
                    />
                  </td>
                  <td>{posicao}°</td>
                  <td>{item.nome}</td>
                  <td>{item.equipe}</td>
                  <td>{item.gols}</td>
                  <td>{item.assistencias}</td>
                  <td>{item.quant_jogos}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <br></br>
      <br></br>
    </Pagina>
  );
};

export default Index;
