import Button from './button';

export default function Modal({ IsTrue }) {
  if (IsTrue) {
    return (
      <div className='  grid absolute top-0 w-[768px] h-full   bg-vermelho-ancora '>
        <div className=' grid grid-col-2 text-center justify-items-center items-center'>
          <div className=''>
            <p className='uppercase text-azul-ancora font-bold Nunito text-2xl'>
              escolha como quer buscar
            </p>
            <div className='grid grid-cols-2'>
              <div>
                <Button texto='com placa' />
                <p className='text-azul-ancora'>
                  A busca por placa assegura que as peças exibidas são
                  específicas para o veículo.
                </p>
              </div>
              <div>
                <Button texto='sem placa' />
                <p className='text-azul-ancora'>
                  A busca sem placa oferece uma seleção ampla de peças,
                  adaptável a diversos veículos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
