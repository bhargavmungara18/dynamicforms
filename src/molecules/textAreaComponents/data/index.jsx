import { useState } from "react";
import { useFormContext } from "../../../hooks/useCreateFormContext";
import RadioButton from "../../../atoms/RadioButtons";

function TextAreaComponentData() {
  const [textAreaData, setTextAreaData] = useState({
    defaultValue: "",
    selectedCase: "",
  });

  const { previewDetails, handlePreviewDetails } = useFormContext();

  function handleTextChange(e) {
    let value = e.target.value;
    let transformedValue = value;

    if (previewDetails.selectedCase === "uppercase") {
      transformedValue = value.toUpperCase();
    } else if (previewDetails.selectedCase === "lowercase") {
      transformedValue = value.toLowerCase();
    }

    setTextAreaData({
      ...textAreaData,
      defaultValue: transformedValue,
    });

    handlePreviewDetails({
      ...previewDetails,
      ...textAreaData,
      defaultValue: transformedValue,
    });
  }

  function handleCaseChange(value) {
    setTextAreaData({
      ...textAreaData,
      selectedCase: value,
    });
    handlePreviewDetails({
      ...previewDetails,
      ...textAreaData,
      selectedCase: value,
    });
  }

  return (
    <>
      <form>
        <label htmlFor="default-value">Default Value </label>
        <textarea
          value={textAreaData.defaultValue}
          onChange={handleTextChange}
        ></textarea>
        <h2>Text Area</h2>

        {["uppercase", "lowercase", "mixed"].map((caseType) => (
          <RadioButton
            key={caseType}
            id={caseType}
            name="lettercase"
            value={caseType}
            checked={
              textAreaData.selectedCase === caseType ||
              previewDetails.selectedCase === caseType
            }
            onChange={() => handleCaseChange(caseType)}
            labelText={
              caseType === "uppercase"
                ? "Uppercase"
                : caseType === "lowercase"
                ? "Lowercase"
                : "Mixed (Allow upper and lower case)"
            }
          />
        ))}
      </form>
    </>
  );
}

export default TextAreaComponentData;
