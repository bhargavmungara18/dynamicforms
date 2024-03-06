import { generateUniqueId } from "../helpers/generateUniqueId";

function RenderedTextInput({
  label,
  prefix,
  type,
  placeholder,
  text,
  handleChange,
  suffix,
  description,
}) {
  const inputId = generateUniqueId();

  return (
    <>
      <div className="input-group">
        <label htmlFor={inputId}>{label}</label>
        <span className="prefix">{prefix}</span>

        <input
          type={type}
          placeholder={placeholder}
          id={inputId}
          value={text}
          onChange={handleChange}
        />
        <span className="suffix">{suffix}</span>
      </div>
      <div>{description}</div>
    </>
  );
}

export default RenderedTextInput;
