import { useEffect, useState } from "react";
import { useFormContext } from "../../../hooks/useCreateFormContext";

function DropdownData() {
  const [rows, setRows] = useState([
    { label: "", value: "", defaultChecked: false },
  ]);
  const [valueIndexes, setValueIndexes] = useState([{ index: "" }]);
  const [selectedValue, setSelectedValue] = useState({
    selectedDefaultValue: "",
  });
  const { previewDetails, handlePreviewDetails } = useFormContext();

  const addRow = () => {
    setRows([...rows, { label: "", value: "", defaultChecked: false }]);
  };

  const handleLabelChange = (e, index) => {
    const updatedRows = [...rows];
    updatedRows[index].label = e.target.value;

    const findValueIndex = valueIndexes.find((value) => value.index === index);

    if (!findValueIndex) {
      updatedRows[index].value = e.target.value;
    }

    setRows(updatedRows);
  };

  const handleValueChange = (e, index) => {
    const updatedRows = [...rows];
    updatedRows[index].value = e.target.value;
    const findValueIndex = valueIndexes.find((value) => value.index === index);

    if (!findValueIndex) {
      setValueIndexes([...valueIndexes, { index: index }]);
    }

    setRows(updatedRows);
  };

  const deleteRow = (index) => {
    const updatedRows = [...rows];
    if (index === 0 && updatedRows.length === 1) {
      updatedRows[index].label = "";
      updatedRows[index].value = "";
    } else {
      updatedRows.splice(index, 1);
    }
    const items = valueIndexes.filter(
      (valueIndex) => valueIndex.index !== index
    );
    setValueIndexes(items);
    setRows(updatedRows);
  };

  const handleDropdownChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedValue({ selectedDefaultValue: selectedOption });

    const updatedRows = rows.map((row) => {
      return {
        ...row,
        defaultChecked: row.value === selectedOption,
      };
    });

    setRows(updatedRows);
  };

  useEffect(() => {
    if (rows.length > 0) {
      handlePreviewDetails({ ...previewDetails, type: "dropdown", rows: rows });
    }
  }, [rows]);

  return (
    <>
      <h2>Default Value</h2>
      <div>
        <select
          value={selectedValue.selectedDefaultValue}
          onChange={handleDropdownChange}
        >
          <option value="" disabled hidden>
            Default Value
          </option>{" "}
          {rows.length > 0 &&
            rows.map((row, i) => (
              <>
                <option value={row.value} key={i}>
                  {row.label}
                </option>
              </>
            ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Label</th>
            <th>Value</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, index) => (
            <tr key={index}>
              <td></td>
              <td>
                <input
                  type="text"
                  value={row.label}
                  onChange={(e) => handleLabelChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.value}
                  onChange={(e) => handleValueChange(e, index)}
                />
              </td>
              <td>
                <button onClick={() => deleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>{" "}
    </>
  );
}

export default DropdownData;
