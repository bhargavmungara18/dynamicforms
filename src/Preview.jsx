import { useEffect, useState } from "react";
import { useFormContext } from "./hooks/useCreateFormContext";
import { nanoid } from "nanoid";
import RenderedTextInput from "./atoms/RenderedTextInput";
import RenderedTextArea from "./atoms/RenderedTextArea";
import RenderedCheckbox from "./atoms/RenderedCheckbox";
import RadioButton from "./atoms/RadioButtons";
import RenderedSelect from "./atoms/RenderedSelect";

function Preview({
  fieldType,
  onClose,
  handleValidateData,
  validateData,
  isValid,
}) {
  const { addForm, previewDetails, handlePreviewDetails } = useFormContext();
  const [text, setText] = useState("");
  const [previewChecked, setPreviewChecked] = useState(null);
  const [selectedOption, setSelectedOption] = useState();

  function handleChange(e) {
    if (previewDetails.selectedCase === "uppercase") {
      setText(e.target.value.toUpperCase());
    } else if (previewDetails.selectedCase === "lowercase") {
      setText(e.target.value.toLowerCase());
    } else {
      setText(e.target.value);
    }
  }

  useEffect(() => {
    setPreviewChecked(previewDetails.selected);
  }, [previewDetails.selected]);

  useEffect(() => {
    if (previewDetails.rows instanceof Array) {
      const defaultSelectedOption = previewDetails.rows.filter(
        (option) => option.defaultChecked
      );

      setSelectedOption(defaultSelectedOption[0]?.value || "");
    }
  }, [previewDetails]);

  console.log(previewDetails.defaultValue, "pre");

  console.log(fieldType, "field type is here");

  console.log(text, "text ");

  useEffect(() => {
    setText(previewDetails.defaultValue);
  }, [previewDetails.defaultValue]);

  const renderField = () => {
    switch (fieldType) {
      case "text":
        return (
          <>
            <RenderedTextInput
              label={previewDetails.label}
              prefix={previewDetails.prefix}
              type={previewDetails.type}
              placeholder={previewDetails.placeholder}
              text={text}
              handleChange={handleChange}
              suffix={previewDetails.suffix}
              description={previewDetails.description}
            />
          </>
        );
      case "textarea":
        return (
          <>
            <RenderedTextArea
              label={previewDetails.label}
              prefix={previewDetails.prefix}
              placeholder={previewDetails.placeholder}
              text={text || previewDetails.defaultValue}
              handleChange={handleChange}
              suffix={previewDetails.suffix}
              description={previewDetails.description}
              rows={previewDetails.rows}
            />
          </>
        );
      case "checkbox":
        return (
          <>
            <RenderedCheckbox
              label={previewDetails.label}
              checked={previewChecked ? true : undefined}
              onChange={(e) => setPreviewChecked(e.target.checked)}
              description={previewDetails.description}
            />
          </>
        );
      case "radio":
        return (
          <>
            <label>{previewDetails.componentLabel}</label>
            {previewDetails?.rows && previewDetails?.rows.length > 0
              ? previewDetails?.rows.map((radioButton, i) => {
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
            <div>{previewDetails.description}</div>
          </>
        );
      case "dropdown":
        return (
          <>
            <RenderedSelect
              label={previewDetails.componentLabel}
              selectedOption={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              rows={previewDetails.rows}
              description={previewDetails.description}
              placeholder={previewDetails.placeholder}
            />
          </>
        );
    }
  };

  function handleSubmit() {
    if (isValid || fieldType !== "radio") {
      addForm({
        id: nanoid(),
        type: previewDetails.type,
        ...previewDetails,
      });
      handlePreviewDetails({});
      onClose();
    } else {
      handleValidateData(true);
    }
  }

  return (
    <section>
      <h2>Preview</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {renderField()}
        <button>Save Field</button>
      </form>
    </section>
  );
}

export default Preview;
