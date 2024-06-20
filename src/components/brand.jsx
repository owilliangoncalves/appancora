import LogoImagem from '/public/logo.png';

export default function Propaganda() {
  return (
    <div className='grid grid-cols-3 justify-center row-span-2 items-center'>
      <img
        src={LogoImagem}
        alt='Logo da Rede ancora'
        className='h-44 col-start-1'
      />
      <div className='col-span-2'>
        <p className='text-azul-ancora text-4xl font-bold'>Busca por item</p>
        <p className='col-start-2 text-muted'>
          Procure pelo item que deseja comprar
        </p>
      </div>
    </div>
  );
}
