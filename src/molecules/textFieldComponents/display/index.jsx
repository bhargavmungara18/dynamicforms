import { useEffect, useState } from "react";
import TextInput from "../../../atoms/TextInput";
import { useFormContext } from "../../../hooks/useCreateFormContext";

function TextFieldDisplay() {
  const [fieldDetails, setFieldDetails] = useState({
    type: "text",
    label: "Text Field",
    placeholder: "",
    description: "",
    prefix: "",
    suffix: "",
  });

  const { handlePreviewDetails, previewDetails } = useFormContext();

  useEffect(() => {
    if (
      fieldDetails.label === "Text Field" &&
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
      });
    }
  }, []);

  const handleFieldChange = (field, value) => {
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
            handleFieldChange("label", e.target.value);
          }}
        />
        <label htmlFor="placeholder">Placeholder</label>
        <TextInput
          type="text"
          id="placeholder"
          value={fieldDetails.placeholder || previewDetails.placeholder}
          onChange={(e) => {
            handleFieldChange("placeholder", e.target.value);
          }}
        />
        <label htmlFor="description">Description</label>
        <TextInput
          type="text"
          id="description"
          value={fieldDetails.description || previewDetails.description}
          onChange={(e) => {
            handleFieldChange("description", e.target.value);
          }}
        />
        <label htmlFor="prefix">Prefix</label>
        <TextInput
          type="text"
          id="prefix"
          value={fieldDetails.prefix || previewDetails.prefix}
          onChange={(e) => {
            handleFieldChange("prefix", e.target.value);
          }}
        />
        <label htmlFor="suffix">Suffix</label>
        <TextInput
          type="text"
          id="suffix"
          value={fieldDetails.suffix || previewDetails.suffix}
          onChange={(e) => {
            handleFieldChange("suffix", e.target.value);
          }}
        />
      </form>
    </section>
  );
}

export default TextFieldDisplay;
