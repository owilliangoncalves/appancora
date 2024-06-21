export default function ButtonSide(props) {
  // eslint-disable-next-line react/prop-types
  const { texto, className, ...olderProps } = props;
  return (
    <button
      {...olderProps}
      className={`text-azul-ancora border-solid border-2 border-azul-ancora py-4 ${
        className || ''
      }`}
    >
      {texto}
    </button>
  );
}
