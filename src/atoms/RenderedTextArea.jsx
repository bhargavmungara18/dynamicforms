import { generateUniqueId } from "../helpers/generateUniqueId";

function RenderedTextArea({
  label,
  prefix,
  placeholder,
  text,
  handleChange,
  suffix,
  description,
  rows,
}) {
  const textAreaId = generateUniqueId("textarea");

  return (
    <>
      <div className="textarea-group">
        <label htmlFor={textAreaId}>{label}</label>
        <span className="prefix">{prefix}</span>

        <textarea
          value={text}
          placeholder={placeholder}
          onChange={handleChange}
          rows={rows}
        ></textarea>

        <span className="suffix">{suffix}</span>
      </div>
      <div>{description}</div>
    </>
  );
}

export default RenderedTextArea;
