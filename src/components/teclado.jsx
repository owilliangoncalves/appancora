import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Teclado(props) {
  // armazenando texto que o usuario escreveu no text area
  const [inputTexto, setInputText] = useState("");

  // Adicionando letra a text area
  const addLetras = (Letra) => {
    setInputText(inputTexto + Letra);
  };

  // limpar texto
  const limpar = () => {
    setInputText("");
    props.setSearch("");
  };

  const confirmar = () => {
    props.setActiveInput(false);
    props.setSearch(inputTexto);
  };

  useEffect(() => {
    props.setSearch(inputTexto);
  }, [inputTexto]);

  return (
    <div className="flex flex-col items-center">
      <textarea
        readOnly
        value={inputTexto}
        className="w-full h-12 text-lg mb-4"
      />
      <div className="grid grid-cols-10 gap-2 mt-3 justify-items-center">
        {/* Números de 0 a 9 */}
        {[...Array(10)].map((_, index_numero) => {
          const numero = index_numero;
          return (
            <button
              key={numero}
              onClick={() => addLetras(numero.toString())}
              className="w-10 h-10 text-base bg-azul-ancora hover:bg-azul-ancora-muted text-white rounded"
            >
              {numero}
            </button>
          );
        })}
        {/* Letras de A a Z */}
        {"QWERTYUIOPASDFGHJKLÇZXCVBNM-".split("").map((letra) => (
          <button
            key={letra}
            onClick={() => addLetras(letra)}
            className="w-10 h-10 text-base bg-azul-ancora hover:bg-azul-ancora-muted text-white rounded"
          >
            {letra}
          </button>
        ))}
      </div>
      <div className="flex mt-5 mb-5 gap-x-5">
        <button
          onClick={limpar}
          className="p-2 w-[100px] text-base bg-red-500 hover:bg-red-600 text-white rounded"
        >
          Limpar
        </button>
        <button
          onClick={() => addLetras(" ")}
          className="w-96 h-10  text-base bg-gray-300 hover:bg-gray-400 text-black rounded"
        ></button>
        <button
          //   onClick={() => alert(`Texto inserido: ${inputTexto}`)}
          onClick={() => confirmar()}
          className="p-2 w-[100px] text-base bg-green-500 hover:bg-green-600 text-white rounded"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}

Teclado.propTypes = {
  setSearch: PropTypes.func,
  setActiveInput: PropTypes.func,
};
