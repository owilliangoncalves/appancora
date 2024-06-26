<<<<<<< HEAD
import PropTypes from "prop-types";

import { useCart } from "../context/CartContext";

import defaultImage from "/public/default.png";
=======
import PropTypes from 'prop-types';
import { useCart } from '../context/cart';
import defaultImage from '/public/default.png';
>>>>>>> origin/main

export default function Produto(props) {
  const { addToCart } = useCart();

  // console.log("cart", cart.length);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
<<<<<<< HEAD
    <div className="flex flex-col object-contain justify-center border-solid border-2 rounded-md border-azul-ancora shadow-md">
      <img
        src={`https://catalogopdtstorage.blob.core.windows.net/imagens-prd/produto/${
          props.imagemReal ?? defaultImage
        }`}
        alt="Imagem do Produto"
        className="rounded-t-md min-h-[40%] max-h-[50%]"
      />
      <div className="ml-3 py-1">
        <p className="font-bold Nunito">{props.nomeProduto}</p>
        <p className="font-bold Nunito ">{props.marca}</p>
        <p className="text-azul-ancora-muted Nunito">
          {new Intl.NumberFormat("pt-BR", {
            currency: "BRL",
            style: "currency",
=======
    <div className='flex p-3 flex-wrap flex-row content-between justify-center  rounded-md  shadow-sm bg-astronaut-blue-20'>
      <div>
        <img
          src={`https://catalogopdtstorage.blob.core.windows.net/imagens-prd/produto/${
            props.imagemReal ?? defaultImage
          }`}
          alt='Imagem do Produto'
          className='rounded-t-md aspect-9/10 object-contain max-h-[200px]'
        />
        <p className='font-bold Nunito'>{props.nomeProduto}</p>
        <p className='font-bold Nunito'>{props.marca}</p>
        <p className='text-azul-ancora-muted Nunito'>
          {new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
>>>>>>> origin/main
          }).format(props.id / 100)}
        </p>
        <p className='Nunito font-thin text-muted'>
          10x de{' '}
          {new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(props.id / 100 / 10)}
        </p>
      </div>
      <div>
        <button
          className='bg-azul-ancora px-4 py-2 text-white rounded-md'
          onClick={() => handleAddToCart(props)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

Produto.propTypes = {
  imagemReal: PropTypes.string,
  nomeProduto: PropTypes.string,
  marca: PropTypes.string,
  id: PropTypes.number,
};
