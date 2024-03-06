function RadioButton(props) {
  const { id, name, value, checked, onChange, labelText } = props;

  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default RadioButton;
