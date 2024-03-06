function TextInput({ type, ...props }) {
  function handleInputChange(event) {
    props.onChange && props.onChange(event);
  }

  return (
    <input
      onChange={handleInputChange}
      {...props}
      type={type}
      className="single-input"
    />
  );
}

export default TextInput;
