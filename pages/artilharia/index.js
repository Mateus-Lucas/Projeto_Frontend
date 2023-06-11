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

  useEffect(() => {
    axios.get('/api/artilharia').then((resultado) => {
      setArtilharia(resultado.data);
    });
  }, []);

  useEffect(() => {
    ordenarPorGols();
  }, [artilharia]);

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

  function ordenarPorGols() {
    const artilhariaOrdenada = [...artilharia].sort((a, b) => b.gols - a.gols);
    setClassificacao(artilhariaOrdenada);
  }

  return (
    <Pagina>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className="text-white">Artilharia da UEFA Champions League</h3>
      </div>
      <br />
      <div className="champions-table-container">
        <Button href="/artilharia/form" className="mb-2" variant="light">
          Novo jogador <AiOutlinePlus />
        </Button>
        <br />
        <Table striped bordered hover variant="light" className="champions-table">
          <thead>
            <tr>
              <th>Opções</th>
              <th>Posição</th>
              <th>Nome do Jogador</th>
              <th>Equipe</th>
              <th>Quantidade de gols</th>
              <th>Quantidade de jogos</th>
            </tr>
          </thead>
          <tbody>
            {classificacao.map((item, index) => {
              const posicao = index + 1;
              return (
                <tr key={item.id}>
                  <td>
                    <Link href={'/artilharia/' + item.id}>
                      <BiEditAlt className="me-3 champions-icon" style={{ cursor: 'pointer' }}  title='Editar'/>
                    </Link>
                    <BsTrash3Fill  title='Excluir'
                      style={{ cursor: 'pointer' }}
                      onClick={() => excluir(item.id)}
                      className="text-primary champions-icon"
                    />
                  </td>
                  <td>{posicao}°</td>
                  <td>{item.nome}</td>
                  <td>{item.equipe}</td>
                  <td>{item.gols}</td>
                  <td>{item.quant_jogos}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Pagina>
  );
};

export default Index;
