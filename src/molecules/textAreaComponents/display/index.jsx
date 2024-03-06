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
    setFieldDetails({
      type: "textarea",
      label: previewDetails.label,
      placeholder: previewDetails.placeholder,
      description: previewDetails.description,
      prefix: previewDetails.prefix,
      suffix: previewDetails.suffix,
      rows: previewDetails.rows,
    });
  }, []);

  useEffect(() => {
    if (
      fieldDetails.label === "Text Area" &&
      Object.keys(previewDetails).length === 0
    ) {
      handlePreviewDetails({ ...fieldDetails });
    }
  }, []);

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
          value={fieldDetails.label}
          onChange={(e) => {
            setFieldDetails({
              ...fieldDetails,
              label: e.target.value,
            });
            handlePreviewDetails({
              ...fieldDetails,
              ...previewDetails,
              label: e.target.value,
            });
          }}
        />
        <label htmlFor="placeholder">Placeholder</label>
        <TextInput
          type="text"
          id="placeholder"
          value={fieldDetails.placeholder || previewDetails.placeholder}
          onChange={(e) => {
            setFieldDetails({
              ...fieldDetails,
              placeholder: e.target.value,
            });
            handlePreviewDetails({
              ...fieldDetails,
              ...previewDetails,
              placeholder: e.target.value,
            });
          }}
        />
        <label htmlFor="description">Description</label>
        <TextInput
          type="text"
          id="description"
          value={fieldDetails.description || previewDetails.description}
          onChange={(e) => {
            setFieldDetails({
              ...fieldDetails,
              description: e.target.value,
            });
            handlePreviewDetails({
              ...fieldDetails,
              ...previewDetails,
              description: e.target.value,
            });
          }}
        />
        <label htmlFor="rows">Rows</label>
        <TextInput
          type="text"
          id="rows"
          value={fieldDetails.rows}
          onChange={(e) => {
            const inputValue = e.target.value.replace(/\D/g, "");

            setFieldDetails({
              ...fieldDetails,
              rows: inputValue,
            });
            handlePreviewDetails({
              ...fieldDetails,
              ...previewDetails,
              rows: inputValue,
            });
          }}
        />

        <label htmlFor="prefix">Prefix</label>
        <TextInput
          type="text"
          id="prefix"
          value={fieldDetails.prefix || previewDetails.prefix}
          onChange={(e) => {
            setFieldDetails({
              ...fieldDetails,
              prefix: e.target.value,
            });
            handlePreviewDetails({
              ...fieldDetails,
              ...previewDetails,
              prefix: e.target.value,
            });
          }}
        />
        <label htmlFor="suffix">Suffix</label>
        <TextInput
          type="text"
          id="suffix"
          value={fieldDetails.suffix || previewDetails.suffix}
          onChange={(e) => {
            setFieldDetails({
              ...fieldDetails,
              suffix: e.target.value,
            });
            handlePreviewDetails({
              ...fieldDetails,
              ...previewDetails,
              suffix: e.target.value,
            });
          }}
        />
        <button>Save</button>
      </form>
    </section>
  );
}

export default TextAreaComponentDisplay;
