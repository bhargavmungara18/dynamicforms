import { useState } from "react";
import TextAreaComponentData from "./molecules/textAreaComponents/data";
import TextAreaComponentDisplay from "./molecules/textAreaComponents/display";
import TextFieldData from "./molecules/textFieldComponents/data";
import TextFieldDisplay from "./molecules/textFieldComponents/display";
import CheckBoxDisplay from "./molecules/checkBoxComponents/display";
import CheckBoxData from "./molecules/checkBoxComponents/data";
import RadioButtonDisplay from "./molecules/radioButtonComponents/display";
import RadioButtonData from "./molecules/radioButtonComponents/data";
import DropdownDisplay from "./molecules/dropdown/display";
import DropdownData from "./molecules/dropdown/data";

function FieldModalContent({
  fieldType,
  validateData,
  handleValidateData,
  isValid,
  handleValid,
}) {
  const [activeTab, setActiveTab] = useState("display");
  const fieldSettings = ["display", "data"];

  const formFields = {
    fields: {
      ids: ["text", "textarea", "dropdown", "checkbox", "radio"],
      entities: {
        text: { id: "text", display: TextFieldDisplay, data: TextFieldData },
        textarea: {
          id: "textarea",
          display: TextAreaComponentDisplay,
          data: TextAreaComponentData,
        },
        checkbox: {
          id: "checkbox",
          display: CheckBoxDisplay,
          data: CheckBoxData,
        },
        radio: {
          id: "radio",
          display: RadioButtonDisplay,
          data: RadioButtonData,
        },
        dropdown: {
          id: "dropdown",
          display: DropdownDisplay,
          data: DropdownData,
        },
      },
    },
  };

  const Component = formFields.fields.entities[fieldType][activeTab];

  return (
    <div>
      <div>
        {fieldSettings.map((fieldSetting, i) => {
          return (
            <button key={i} onClick={() => setActiveTab(fieldSetting)}>
              {fieldSetting.slice(0, 1).toUpperCase() + fieldSetting.slice(1)}
            </button>
          );
        })}
      </div>
      <Component
        validateData={validateData}
        handleValidateData={handleValidateData}
        isValid={isValid}
        handleValid={handleValid}
      />
    </div>
  );
}

export default FieldModalContent;
