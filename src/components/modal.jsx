import Button from './buttonHome';
import mostraModal from '../App';

export default function Modal({ IsTrue }) {
  if (IsTrue) {
    return (
      <div className='  grid absolute top-0 w-[768px] h-full bg-fundo grid-rows-2'>
        <div className='row-start-1 col-span-1 flex items-center justify-center'>
          <p className='uppercase text-azul-ancora font-bold Nunito text-2xl'>
            escolha como quer buscar
          </p>
        </div>
        <div className='row-start-2'>
          <div className='grid grid-cols-2 '>
            <div className='place-items-center'>
              <Button onClick={mostraModal} texto='com placa' />
              <p className='text-azul-ancora px-14'>
                A busca por placa assegura que as peças exibidas são específicas
                para o veículo.
              </p>
            </div>
            <div>
              <Button texto='sem placa' className='bg-azul-ancora-muted' />
              <p className='text-azul-ancora px-14'>
                A busca sem placa oferece uma seleção ampla de peças, adaptável
                a diversos veículos.
              </p>
            </div>
            <div className='rows-start-2'></div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
