import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Rodape = () => {
  return (
    <div style={{width: '100%', zIndex: 9999}} className='bg-dark text-white text-center position-fixed bottom-0'>
      <p> Todos os direitos reservados à UEFA</p>
    </div>
  )
}

export default Rodape