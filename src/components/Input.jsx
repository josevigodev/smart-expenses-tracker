export function Input({ type, value, id, required, handleChange, className }) {
  return type === 'text' ? (
    <input
      required={required}
      id={id}
      value={value}
      onChange={handleChange}
      type='text'
      className={className}
    />
  ) : type === 'number' ? (
    <input
      required={required}
      id={id}
      value={value}
      onChange={handleChange}
      type='number'
      className={className}
      step='0.01'
      min={0.01}
    />
  ) : type === 'date' ? (
    <input
      required={required}
      id={id}
      value={value}
      onChange={handleChange}
      type='date'
      className={className}
    />
  ) : type === 'select' ? (
    <select
      className={className}
      required={required}
      id={id}
      value={value}
      onChange={handleChange}
    >
      <option value='select'>Select</option>
      <option value='Housing'>Housing</option>
      <option value='Utilities'>Utilities</option>
      <option value='Transportation'>Transportation</option>
      <option value='Groceries'>Groceries</option>
      <option value='Health'>Health</option>
      <option value='Insurance'>Insurance</option>
      <option value='Entertainment'>Entertainment</option>
      <option value='Education'>Education</option>
      <option value='Shopping'>Shopping</option>
      <option value='Travel'>Travel</option>
      <option value='Gifts'>Gifts</option>
      <option value='Saving'>Saving</option>
      <option value='Investments'>Investments</option>
      <option value='Miscellaneous'>Miscellaneous</option>
    </select>
  ) : undefined;
}
