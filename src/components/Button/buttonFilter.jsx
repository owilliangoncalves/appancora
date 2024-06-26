export default function ButtonFilter(props) {
  // eslint-disable-next-line react/prop-types
  const { texto, className, ...olderProps } = props;
  return (
    <div className="grid">
      <button {...olderProps} className={`justify-stretch ${className || ""}`}>
        {texto}
      </button>
    </div>
  );
}
