import ImageFooter from '/public/footer.png';
export default function Footer() {
  return (
    <div className='flex justify-center relative'>
      <img
        src={ImageFooter}
        alt='Imagem do Rodapé'
        className='fixed bottom-0'
      />
    </div>
  );
}
