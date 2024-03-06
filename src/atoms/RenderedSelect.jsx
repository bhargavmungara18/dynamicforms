function RenderedSelect({
  label,
  selectedOption = "",
  onChange,
  rows,
  description,
  placeholder,
}) {
  return (
    <div>
      <label>{label}</label>
      <select value={selectedOption} onChange={onChange}>
        {selectedOption === "" && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {rows && rows.length > 0
          ? rows.map((selectValue, i) => (
              <>
                <option value={selectValue.value} key={i}>
                  {selectValue.label}
                </option>
              </>
            ))
          : null}
      </select>
      <div>{description}</div>
    </div>
  );
}

export default RenderedSelect;
