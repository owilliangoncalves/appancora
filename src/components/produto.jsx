export default function Produto() {
  return (
    <div className='flex flex-col justify-center border-solid border-2 rounded-md border-azul-ancora shadow-md'>
      <img
        src='https://placehold.co/200'
        alt='Imagem do Produto'
        className='rounded-t-md'
      />
      <div className='ml-3 py-1'>
        <p className='font-bold Nunito'>Nome</p>
        <p className='text-azul-ancora-muted Nunito'>Preço</p>
        <p className='Nunito font-thin text-muted'>parcelamento</p>
      </div>
    </div>
  );
}
