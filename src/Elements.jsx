import { useState } from "react";
import { useFormContext } from "./hooks/useCreateFormContext";
import RenderedTextInput from "./atoms/RenderedTextInput";
import RenderedTextArea from "./atoms/RenderedTextArea";
import RenderedCheckbox from "./atoms/RenderedCheckbox";
import RadioButton from "./atoms/RadioButtons";
import RenderedSelect from "./atoms/RenderedSelect";

function FormField({ inputValue, onInputChange }) {
  const {
    options,
    label,
    type,
    placeholder,
    selectedCase,
    description,
    prefix,
    suffix,
    defaultValue,
    selected,
  } = inputValue;

  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState();

  function handleChange(e) {
    if (selectedCase === "uppercase") {
      setText(e.target.value.toUpperCase());
    } else if (selectedCase === "lowercase") {
      setText(e.target.value.toLowerCase());
    } else {
      setText(e.target.value);
    }
  }

  console.log(inputValue, "input value");

  const renderField = () => {
    switch (inputValue.type) {
      case "text":
        return (
          <>
            {/* <div className="input-group">
              <label htmlFor={inputId}>{label}</label>
              <span className="prefix">{prefix}</span>
              <input
                type={type}
                placeholder={placeholder}
                id={inputId}
                value={text}
                onChange={handleChange}
              />
              <span className="suffix">{suffix}</span>
            </div>

            <div>{description}</div> */}

            <RenderedTextInput
              label={label}
              prefix={prefix}
              type={type}
              placeholder={placeholder}
              text={text}
              handleChange={handleChange}
              suffix={suffix}
              description={description}
            />
          </>
        );
      case "textarea":
        return (
          <RenderedTextArea
            label={label}
            prefix={prefix}
            placeholder={placeholder}
            text={text || defaultValue}
            handleChange={handleChange}
            suffix={suffix}
            description={description}
          />
        );
      case "dropdown":
        return (
          <>
            <RenderedSelect
              label={inputValue.componentLabel}
              rows={inputValue.rows}
              description={inputValue.description}
              selectedOption={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
          </>
        );
      case "checkbox":
        return (
          <>
            <RenderedCheckbox
              label={label}
              checked={selected ? true : undefined}
              description={description}
            />
          </>
        );
      case "radio":
        return (
          <>
            <label>{inputValue.componentLabel}</label>
            {inputValue?.rows && inputValue?.rows.length > 0
              ? inputValue?.rows.map((radioButton, i) => {
                  return (
                    <RadioButton
                      id={radioButton.value}
                      name="preview-value"
                      value={radioButton.value}
                      checked={radioButton.defaultChecked}
                      key={i}
                      labelText={radioButton.label}
                    />
                  );
                })
              : null}
          </>
        );
      default:
        return null;
    }
  };

  return <div>{renderField()}</div>;
}

function Elements({ inputValue = "" }) {
  const { formFields } = useFormContext();

  console.log(formFields, "form fields");

  const renderFormFields = () => {
    return formFields?.map((field, index) => (
      <div key={index}>
        <FormField inputValue={field} />
      </div>
    ));
  };

  return (
    <>
      <form>{renderFormFields()}</form>
    </>
  );
}

export default Elements;
