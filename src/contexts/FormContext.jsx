import { createContext, useState } from "react";

export const FormContext = createContext({});

export function FormContextProvider({ children }) {
  const [formFields, setFormFields] = useState([]);
  const [previewDetails, setPreviewDetails] = useState({});

  const addForm = (fieldData) => {
    setFormFields([...formFields, fieldData]);
  };

  function handlePreviewDetails(details) {
    setPreviewDetails(details);
  }

  return (
    <FormContext.Provider
      value={{ formFields, addForm, previewDetails, handlePreviewDetails }}
    >
      {children}
    </FormContext.Provider>
  );
}
