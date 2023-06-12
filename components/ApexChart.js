import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import axios from 'axios';

const ApexChart = () => {
  const color_white = ['#FFFFFF'];
  const [chartData, setChartData] = useState(null);
  const [quantidades, setQuantidades] = useState([]);

  useEffect(() => {
    const getAll = () => {
      axios.get('/api/equipes').then(resultado => {
        (resultado.data);

        const times = resultado.data.map(item => item.nome);
        const quantidade = resultado.data.map(item => item.quant_jogadores);

        const data = {
          categories: times,
          options: {
            chart: {
              height: 350,
              type: 'bar',
              events: {
                click: function (chart, w, e) {
                  // console.log(chart, w, e)
                }
              }
            },
            colors: color_white,
            plotOptions: {
              bar: {
                columnWidth: '65%',
                distributed: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false,
            },
            yaxis:{
              labels: {
                style: {
                  colors: color_white
                }
              }
            },
            xaxis: {
              categories: times,
              labels: {
                style: {
                  colors: color_white,
                  fontSize: '15px'
                }
              }
            }
          }
        };

        setChartData(data);
        setQuantidades(quantidade);
      }).catch(error => {
        console.error('Erro ao obter dados das equipes:', error);
      });
    };

    getAll();
  }, []);

  const DynamicApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
    loading: () => <div>Loading...</div>,
  });

  return (
    <div id="chart">
      {chartData && (
        <div>
          <h3 className='text-center text-white'>Quantidades jogadores por time</h3>
          <DynamicApexChart options={chartData.options} series={[{ data: quantidades }]} type="bar" height={350} />
        </div>
      )}
    </div>
  );
};

export default ApexChart;
