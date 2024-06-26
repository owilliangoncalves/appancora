import React, { useState, useEffect, useContext } from 'react';
import {
  Link,
  redirect,
  redirectDocument,
  useNavigate,
} from 'react-router-dom';
import Teclado from '../../components/teclado';

import { fetchData } from '../../service/api';
import { PlacaContext } from '../../context/placa';

export default function buscaPlaca() {
  const placaContext = useContext(PlacaContext);
  const navigate = useNavigate();

  const regex = '[A-Z]{3}[0-9][0-9A-Z][0-9]{2}';

  const [placa, setPlaca] = useState('');
  const [activeInput, setActiveInput] = useState(false);

  const handleInputClick = () => {
    setActiveInput(true);
  };

  const handleInputBlur = () => {
    setActiveInput(false);
  };

  const handlerPlaca = (e) => {
    setPlaca(e.target.value);
  };

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        if (placa.length !== 7) return;

        const response = await fetchData(placa);

        if (!response) throw new Error('Placa não existe');

        // Se a placa existir, continuara aqui
        console.log('placa existe');
        placaContext.setPlaca(placa);
        navigate('/loja');
      } catch (err) {
        // Se der erro na solicitação, caira para ca
        console.log(err);
      }
    };
    handleSubmit();
  }, [placa]);

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
            onChange={handlerPlaca}
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
