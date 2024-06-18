import React from 'react';
import Button from './components/button';
import Footer from './components/footer';
import Logo from './components/logo';
import kitImage from '/public/kitImage.png';
import Modal from './components/modal';

export default function App() {
  let [modal, setModal] = React.useState(false);

  function mostraModal() {
    setModal(console.log('oi' + modal));
  }
  return (
    <>
      <section className='bg-bg-preto h-[100vh] bg-cover container'>
        <Logo />
        <div className='flex justify-center'>
          <img src={kitImage} alt='Kit peças' />
        </div>
        <Modal />
        <div className=' flex justify-center'>
          <Button onClick={mostraModal} texto={'toque aqui para começar'} />
        </div>
        <Footer />
      </section>
    </>
  );
}
