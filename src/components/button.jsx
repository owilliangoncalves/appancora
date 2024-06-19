export default function Button(props) {
  // eslint-disable-next-line react/prop-types
  const { texto, className, ...olderProps } = props;
  return (
    <button {...olderProps} className={`Button textButton ${className || ''}`}>
      {texto}
    </button>
  );
}
