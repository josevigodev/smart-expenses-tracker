export function Button({ children, handleClick, type, className }) {
  return (
    <button type={type} onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
