import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Teclado from '../../components/teclado';

export default function buscaPlaca() {
  const regex = '[A-Z]{3}[0-9][0-9A-Z][0-9]{2}';

  const [placa, setPlaca] = useState('AAA-0000');
  const [activeInput, setActiveInput] = useState(false);

  const handleInputClick = () => {
    setActiveInput(true);
  };

  const handleInputBlur = () => {
    setActiveInput(false);
  };

  return (
    <>
      <div>
        <div className='container h-screen flex flex-col items-center justify-center gap-16'>
          <div className='container pl-8'>
            <Link className='flex gap-1 items-center justify-start' to='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='size-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
                />
              </svg>

              <h1>Voltar</h1>
            </Link>
          </div>
          <p className='uppercase text-azul-ancora font-bold Nunito text-2xl'>
            DIGITE SUA PLACA
          </p>
          <input
            maxLength={8}
            minLength={5}
            className='w-8/12 text-xl h-16 border-4 text-center rounded border-azul-ancora'
            type='text'
            name=''
            id=''
            placeholder={placa}
            onClick={handleInputClick}
          />
          {activeInput && (
            <Teclado setSearch={setPlaca} setActiveInput={setActiveInput} />
          )}
        </div>
      </div>
    </>
  );
}
