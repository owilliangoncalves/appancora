import { useState } from 'react';

export default function Teclado() {
  // armazenando texto que o usuario escreveu no text area
  const [inputTexto, setInputText] = useState('');

  // Adicionando letra a text area
  const addLetras = (Letra) => {
    setInputText(inputTexto + Letra);
  };

  // limpar texto
  const limpar = () => {
    setInputText('');
  };

  return (
    <div className='flex flex-col items-center'>
      <textarea readOnly value={inputTexto} className='w-full h-12 text-lg' />
      <div className='grid grid-cols-7 gap-2 mt-5'>
        {[...Array(26)].map((_, index) => {
          const letter = String.fromCharCode(index + 65); // Letras maiúsculas A-Z
          return (
            <button
              key={letter}
              onClick={() => addLetras(letter)}
              className='p-2 text-base bg-blue-500 hover:bg-blue-700 text-white rounded'
            >
              {letter}
            </button>
          );
        })}
        <button
          onClick={() => addLetras(' ')}
          className='p-2 text-base bg-gray-300 hover:bg-gray-400 text-black rounded'
        >
          Espaço
        </button>
        <button
          onClick={limpar}
          className='p-2 text-base bg-red-500 hover:bg-red-600 text-white rounded'
        >
          Limpar
        </button>
        <button
          onClick={() => alert(`Texto inserido: ${inputTexto}`)}
          className='p-2 text-base bg-green-500 hover:bg-green-600 text-white rounded'
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
