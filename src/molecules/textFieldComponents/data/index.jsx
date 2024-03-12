import { useState } from "react";
import { useFormContext } from "../../../hooks/useCreateFormContext";
import RadioButton from "../../../atoms/RadioButtons";
import TextInput from "../../../atoms/TextInput";

function TextFieldData() {
  const [textFieldContent, settextFieldContent] = useState({
    type: "text",
    selectedCase: "",
    defaultValue: "",
  });

  const { handlePreviewDetails, previewDetails } = useFormContext();

  const handleCaseChange = (value) => {
    settextFieldContent({ ...textFieldContent, selectedCase: value });
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

  const handleTextChange = (e) => {
    let value = e.target.value;
    let transformedValue = value;

    if (previewDetails.selectedCase === "uppercase") {
      transformedValue = value.toUpperCase();
    } else if (previewDetails.selectedCase === "lowercase") {
      transformedValue = value.toLowerCase();
    }

    settextFieldContent({
      ...textFieldContent,
      defaultValue: transformedValue,
    });
    handlePreviewDetails({ ...previewDetails, defaultValue: transformedValue });
  };

  return (
    <>
      <h2>Text Case</h2>
      <label htmlFor="default-value">Default Value</label>
      <TextInput
        value={textFieldContent.defaultValue}
        onChange={handleTextChange}
        id="default-value"
      />
      <div>
        {radioOptions.map((option) => (
          <div key={option.id}>
            <RadioButton
              id={option.id}
              name="lettercase"
              value={option.value}
              checked={
                textFieldContent.selectedCase === option.value ||
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
