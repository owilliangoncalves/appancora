export default function Button(props) {
  // eslint-disable-next-line react/prop-types
  return (
    <button
      className={` bg-azul-ancora text-fundo uppercase py-6 px-5 rounded-full hover:bg-vermelho-ancora ${
        props.className || ''
      }`}
    >
      {props.texto}
    </button>
  );
}
