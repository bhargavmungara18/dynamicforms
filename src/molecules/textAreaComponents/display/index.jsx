import TextInput from "../../../atoms/TextInput";
import { useState, useEffect } from "react";
import { useFormContext } from "../../../hooks/useCreateFormContext";

function TextAreaComponentDisplay() {
  const [fieldDetails, setFieldDetails] = useState({
    type: "textarea",
    label: "Text Area",
    placeholder: "",
    description: "",
    prefix: "",
    suffix: "",
    rows: 3,
  });

  const { handlePreviewDetails, previewDetails } = useFormContext();

  useEffect(() => {
    if (
      fieldDetails.label === "Text Area" &&
      Object.keys(previewDetails).length === 0
    ) {
      handlePreviewDetails({ ...fieldDetails });
    } else if (Object.keys(previewDetails).length > 0) {
      setFieldDetails({
        ...fieldDetails,
        label: previewDetails.label,
        placeholder: previewDetails.placeholder,
        description: previewDetails.description,
        prefix: previewDetails.prefix,
        suffix: previewDetails.suffix,
        rows: previewDetails.rows,
      });
    }
  }, []);

  const handleValueChange = (field, value) => {
    const updatedFieldDetails = { ...fieldDetails, [field]: value };
    setFieldDetails(updatedFieldDetails);
    handlePreviewDetails({ ...previewDetails, ...updatedFieldDetails });
  };

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="label">Label *</label>
        <TextInput
          id="label"
          value={fieldDetails.label || previewDetails.label}
          onChange={(e) => {
            handleValueChange("label", e.target.value);
          }}
        />
        <label htmlFor="placeholder">Placeholder</label>
        <TextInput
          type="text"
          id="placeholder"
          value={fieldDetails.placeholder || previewDetails.placeholder}
          onChange={(e) => {
            handleValueChange("placeholder", e.target.value);
          }}
        />
        <label htmlFor="description">Description</label>
        <TextInput
          type="text"
          id="description"
          value={fieldDetails.description || previewDetails.description}
          onChange={(e) => {
            handleValueChange("description", e.target.value);
          }}
        />
        <label htmlFor="rows">Rows</label>
        <TextInput
          type="text"
          id="rows"
          value={fieldDetails.rows}
          onChange={(e) => {
            const inputValue = e.target.value.replace(/\D/g, "");
            handleValueChange("rows", inputValue);
          }}
        />

        <label htmlFor="prefix">Prefix</label>
        <TextInput
          type="text"
          id="prefix"
          value={fieldDetails.prefix || previewDetails.prefix}
          onChange={(e) => {
            handleValueChange("prefix", e.target.value);
          }}
        />
        <label htmlFor="suffix">Suffix</label>
        <TextInput
          type="text"
          id="suffix"
          value={fieldDetails.suffix || previewDetails.suffix}
          onChange={(e) => {
            handleValueChange("suffix", e.target.value);
          }}
        />
      </form>
    </section>
  );
}

export default TextAreaComponentDisplay;
