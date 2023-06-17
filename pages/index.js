import Pagina from '@/components/Pagina'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Pagina >
      <br></br>
      <br></br>
      <h1 className='text-white text-center'>Bem-vindo à página de cadastro da Champions League!</h1>
      <br></br>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div style={{display: 'flex', justifyContent: 'center' }}>
          <img src="https://s2-ge.glbimg.com/xscXDWS7-Gqkc4aO_MdBmkVZHn8=/1200x/smart/filters:cover():strip_icc()/s.glbimg.com/es/ge/f/original/2015/02/24/taca-championsleague-reu.jpg"
            style={{
              maxWidth: '100%',
              borderRadius: '5px',
              border: '4px solid white',
              width: '800px'
            }} />
        </div>
      </div>
      <div className='text-white' style={{ fontWeight: 'bold', textShadow: '2px 2px 0 #000' }}>
        <br></br>
        <br></br>
        <p>Nós estamos entusiasmados por você estar aqui, pronto para se juntar à competição de futebol mais prestigiada do continente europeu. A Champions League é conhecida por reunir os melhores clubes do mundo em uma batalha épica pelo título mais cobiçado do futebol de clubes.</p>
        <p>Nesta página de cadastro, você terá a oportunidade de fazer parte dessa grandeza. É aqui que você poderá registrar seu time e participar de uma jornada emocionante, repleta de partidas eletrizantes, rivalidades intensas e momentos inesquecíveis.</p>
        <p>Ao se cadastrar, você estará abrindo as portas para enfrentar os gigantes do futebol, competindo em estádios icônicos e testando suas habilidades contra os melhores jogadores do mundo. A Champions League é o palco onde os sonhos se realizam e onde a história é escrita a cada partida.</p>
        <p>Este é o lugar onde o futebol se transforma em magia, onde a paixão e a emoção tomam conta dos corações dos torcedores ao redor do globo. A cada edição, a competição nos presenteia com jogos épicos, lances geniais e momentos de pura adrenalina que ficarão gravados na memória de todos os amantes do esporte.</p>
        <p>Então, não perca tempo! Seja parte dessa jornada emocionante, inscreva seu time na Champions League e prepare-se para vivenciar a grandiosidade do futebol europeu. Estamos ansiosos para ver você em campo, lutando pelo título e deixando sua marca na história desta competição lendária.</p>
        <p>Abrace o desafio, supere os obstáculos e faça parte da elite do futebol mundial. Junte-se a nós nesta página de cadastro e entre para a história da Champions League. Que comece a sua jornada rumo à glória!</p>
      </div>
      <br></br>
      <br></br>
    </Pagina>
  )
}
