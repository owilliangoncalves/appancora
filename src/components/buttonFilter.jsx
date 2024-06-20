export default function ButtonFilter(props) {
  // eslint-disable-next-line react/prop-types
  const { texto, className, ...olderProps } = props;
  return (
    <div className='bg-azul-ancora text-white Nunito mt-3 px-2 py-2 rounded-md'>
      <button {...olderProps} className={` ${className || ''}`}>
        {texto}
      </button>
    </div>
  );
}
