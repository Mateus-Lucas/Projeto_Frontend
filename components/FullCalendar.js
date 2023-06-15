import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import multiMonthPlugin from '@fullcalendar/multimonth';
import axios from 'axios';

const formatarData = (data) => {
  const partes = data.split('/');

  if (partes.length === 3) {
    const dia = partes[0];
    const mes = partes[1];
    const ano = partes[2];

    if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
      return `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
    }
  }

  return data;
};

const FullCalendar = () => {
  const calendarRef = useRef(null);
  const [jogos, setJogos] = useState([]);
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    axios.get('/api/jogos').then(resultado => {
      setJogos(resultado.data.map(item => ({
        ...item,
        dataModificada: formatarData(item.data)
      })));
    });
  }, []);

  useEffect(() => {
    const calendar = new Calendar(calendarRef.current, {
      plugins: [multiMonthPlugin],
      initialView: 'multiMonthYear',
      locale: 'pt-br',
      events: eventos, // Agora a variável "eventos" está definida e acessível
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, [eventos]);

  useEffect(() => {
    setEventos(
      jogos.map(item => ({
        title: `${item.casa} x ${item.visitante}`,
        date: item.dataModificada
      }))
    );
  }, [jogos]);

  return <div ref={calendarRef}></div>;
};

export default FullCalendar;
