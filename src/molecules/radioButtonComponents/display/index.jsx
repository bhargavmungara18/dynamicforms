import { useEffect, useState } from "react";
import { useFormContext } from "../../../hooks/useCreateFormContext";
import TextInput from "../../../atoms/TextInput";

function RadioButtonDisplay() {
  const [fieldDetails, setFieldDetails] = useState({
    type: "radio",
    componentLabel: "Radio",
    description: "",
  });

  const { handlePreviewDetails, previewDetails } = useFormContext();

  useEffect(() => {
    if (
      fieldDetails.componentLabel === "Radio" &&
      Object.keys(previewDetails).length === 0
    ) {
      handlePreviewDetails({
        ...fieldDetails,
      });
    }
  }, []);

  return (
    <>
      <form>
        <label htmlFor="label">Label * </label>
        <TextInput
          id="label"
          value={fieldDetails.componentLabel}
          onChange={(e) => {
            setFieldDetails({
              ...fieldDetails,
              componentLabel: e.target.value,
            });
            handlePreviewDetails({
              ...fieldDetails,
              ...previewDetails,
              componentLabel: e.target.value,
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
      </form>
    </>
  );
}

export default RadioButtonDisplay;
