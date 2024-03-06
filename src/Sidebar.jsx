function Sidebar({ openModal }) {
  const types = [
    { display: "Text Field", value: "text" },
    { display: "Text Area", value: "textarea" },
    { display: "Dropdown", value: "dropdown" },
    { display: "Checkbox", value: "checkbox" },
    { display: "Radio Button", value: "radio" },
  ];

  return (
    <section className="sidebar">
      {types.map((type, i) => {
        return (
          <button key={i} onClick={() => openModal(type.value)}>
            {type.display}
          </button>
        );
      })}
    </section>
  );
}

export default Sidebar;
