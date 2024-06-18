import LogoImagem from '/public/logo.png';

export default function Logo() {
  return (
    <div className='flex justify-center pt-10'>
      <img src={LogoImagem} alt='Logo da Rede ancora' />;
    </div>
  );
}
