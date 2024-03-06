import { useState } from "react";
import { useFormContext } from "../../../hooks/useCreateFormContext";

function CheckBoxData() {
  const { previewDetails, handlePreviewDetails } = useFormContext();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsChecked(isChecked);

    handlePreviewDetails({ ...previewDetails, selected: isChecked });
  };

  return (
    <>
      <label htmlFor="defaultvalue">Default Value</label>
      <input
        id="defaultvalue"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </>
  );
}

export default CheckBoxData;
