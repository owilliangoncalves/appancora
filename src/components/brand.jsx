import { Link } from 'react-router-dom';
import LogoImagem from '/public/brand.png';

export default function Propaganda() {
  return (
    <div className='col-start-1 col-span-4  items-center'>
      <Link to='/'>
        <img
          src={LogoImagem}
          alt='Logo da Rede ancora'
          className='h-44  w-full'
        />
      </Link>
    </div>
  );
}
