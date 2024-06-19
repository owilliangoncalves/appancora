import React from 'react';
import Button from './components/button';
import Footer from './components/footer';
import Logo from './components/logo';
import Modal from './components/modal';
import Image from './components/image';

export default function App() {
  const [open, setOpen] = React.useState(false);
  function mostraModal() {
    setOpen(!open);
  }
  return (
    <>
      <section className='bg-bg-preto grid grid-rows-5 h-[100vh]  bg-cover container'>
        <Logo />

        <Image />

        <Modal IsTrue={open} />
        <div className=' flex justify-center'>
          <Button onClick={mostraModal} texto={'toque aqui para começar'} />
        </div>
        <Footer />
      </section>
    </>
  );
}
