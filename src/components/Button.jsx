export function Button({ children, handleClick, type, className, title }) {
  return (
    <button
      title={title}
      type={type}
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
