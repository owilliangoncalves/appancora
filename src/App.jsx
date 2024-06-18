import Button from './components/button';
import Footer from './components/footer';
import Logo from './components/logo';
import kitImage from '/public/kitImage.png';

export default function App() {
  return (
    <>
      <section className='bg-bg-preto h-[100vh] bg-cover container'>
        <Logo />
        <div className='flex justify-center'>
          <img src={kitImage} alt='Kit peças' />
        </div>
        <div className=' flex justify-center'>
          <Button className='Nunito' texto={'toque aqui para começar'} />
        </div>
        <Footer />
      </section>
    </>
  );
}
