import { useState, useEffect } from "react";
import TextInput from "../../../atoms/TextInput";
import { useFormContext } from "../../../hooks/useCreateFormContext";

function DropdownDisplay() {
  const [fieldDetails, setFieldDetails] = useState({
    type: "dropdown",
    componentLabel: "Select",
    placeholder: "",
    description: "",
  });

  const { handlePreviewDetails, previewDetails } = useFormContext();

  useEffect(() => {
    setFieldDetails({
      type: "dropdown",
      label: previewDetails.label,
      placeholder: previewDetails.placeholder,
      description: previewDetails.description,
      componentLabel: previewDetails.componentLabel,
    });
  }, []);

  useEffect(() => {
    if (
      fieldDetails.componentLabel === "Select" &&
      Object.keys(previewDetails).length === 0
    ) {
      handlePreviewDetails({ ...fieldDetails });
    }
  }, []);

  const handleInputChange = (key, value) => {
    setFieldDetails({
      ...fieldDetails,
      [key]: value,
    });
    handlePreviewDetails({
      ...fieldDetails,
      [key]: value,
    });
  };

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // handleSubmit();
        }}
      >
        <label htmlFor="label">Label *</label>
        <TextInput
          id="label"
          value={fieldDetails.componentLabel}
          onChange={(e) => {
            handleInputChange("componentLabel", e.target.value);
          }}
        />
        <label htmlFor="placeholder">Placeholder</label>
        <TextInput
          type="text"
          id="placeholder"
          value={fieldDetails.placeholder || previewDetails.placeholder}
          onChange={(e) => {
            handleInputChange("placeholder", e.target.value);
          }}
        />
        <label htmlFor="description">Description</label>
        <TextInput
          type="text"
          id="description"
          value={fieldDetails.description || previewDetails.description}
          onChange={(e) => {
            handleInputChange("description", e.target.value);
          }}
        />
      </form>
    </section>
  );
}

export default DropdownDisplay;
