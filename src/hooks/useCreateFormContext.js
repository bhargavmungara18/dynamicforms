import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

export const useFormContext = () => {
  const createFormContext = useContext(FormContext);
  if (!createFormContext) {
    throw new Error("Create FormContext is null");
  }

  return createFormContext;
};
