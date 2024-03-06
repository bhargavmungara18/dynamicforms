import { useState, useEffect } from "react";
import { useFormContext } from "../../../hooks/useCreateFormContext";
import TextInput from "../../../atoms/TextInput";

function CheckBoxDisplay() {
  const { handlePreviewDetails, previewDetails } = useFormContext();

  const [fieldDetails, setFieldDetails] = useState({
    type: "checkbox",
    label: previewDetails.label || "Checkbox",
    description: previewDetails.description || "",
  });

  // useEffect(() => {
  //   setFieldDetails({
  //     type: "checkbox",
  //     label: previewDetails.label,
  //     description: previewDetails.description,
  //   });
  // }, []);

  useEffect(() => {
    if (
      fieldDetails.label === "Checkbox" &&
      Object.keys(previewDetails).length === 0
    ) {
      handlePreviewDetails({ ...fieldDetails });
    }
  }, []);

  const handleCheckboxChange = (field, value) => {
    const updatedFieldDetails = { ...fieldDetails, [field]: value };
    setFieldDetails(updatedFieldDetails);
    handlePreviewDetails({ ...previewDetails, ...updatedFieldDetails });
  };

  return (
    <>
      <section>
        <form>
          <label htmlFor="label">Label * </label>
          <TextInput
            id="label"
            value={fieldDetails.label}
            onChange={(e) => {
              handleCheckboxChange("label", e.target.value);
            }}
          />
          <label htmlFor="description">Description</label>
          <TextInput
            type="text"
            id="description"
            value={fieldDetails.description}
            onChange={(e) => {
              handleCheckboxChange("description", e.target.value);
            }}
          />
        </form>
      </section>
    </>
  );
}

export default CheckBoxDisplay;
