import { useState } from "react";
import { useFormContext } from "../../../hooks/useCreateFormContext";
import RadioButton from "../../../atoms/RadioButtons";

function TextFieldData() {
  const [selectedCase, setSelectedCase] = useState({
    type: "text",
    value: "",
  });

  const { handlePreviewDetails, previewDetails } = useFormContext();

  const handleCaseChange = (value) => {
    setSelectedCase({ ...selectedCase, value });
    handlePreviewDetails({ ...previewDetails, selectedCase: value });
  };

  const radioOptions = [
    { id: "uppercase", value: "uppercase", labelText: "UpperCase" },
    { id: "lowercase", value: "lowercase", labelText: "LowerCase" },
    {
      id: "mixed",
      value: "mixed",
      labelText: "Mixed (Allow upper and lower case)",
    },
  ];

  return (
    <>
      <h2>Text Case</h2>
      <div>
        {radioOptions.map((option) => (
          <div key={option.id}>
            <RadioButton
              id={option.id}
              name="lettercase"
              value={option.value}
              checked={
                selectedCase.value === option.value ||
                previewDetails.selectedCase === option.value
              }
              onChange={() => handleCaseChange(option.value)}
              labelText={option.labelText}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default TextFieldData;
