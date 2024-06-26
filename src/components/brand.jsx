import LogoImagem from '/public/logo.png';

import { Link } from 'react-router-dom';

export default function Propaganda() {
  return (
    <div className='col-start-2 col-span-4  grid grid-cols-2 items-center'>
      <Link to='/'><img
        src={LogoImagem}
        alt='Logo da Rede ancora'
        className='h-44 col-start-1'
      />
      </Link>
      <div>
        <p className='text-azul-ancora text-4xl font-bold'>Busca por item</p>
        <p className='col-start-2 text-muted'>
          Procure pelo item que deseja comprar
        </p>
      </div>
    </div>
  );
}
