function RenderedCheckbox({ label, checked, handleChange, description }) {
  return (
    <>
      <label>{label}</label>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <div>{description}</div>
    </>
  );
}

export default RenderedCheckbox;
