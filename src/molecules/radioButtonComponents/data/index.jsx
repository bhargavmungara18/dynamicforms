import { useEffect, useState } from "react";
import { useFormContext } from "../../../hooks/useCreateFormContext";
import RadioButton from "../../../atoms/RadioButtons";

function RadioButtonData({ validateData, handleValidateData, handleValid }) {
  const [rows, setRows] = useState([
    { label: "", value: "", defaultChecked: false, error: false },
  ]);
  const [valueIndexes, setValueIndexes] = useState([{ index: "" }]);
  const [selectedValue, setSelectedValue] = useState({
    selectedDefaultValue: "",
  });
  const { previewDetails, handlePreviewDetails } = useFormContext();

  const addRow = () => {
    setRows([
      ...rows,
      { label: "", value: "", defaultChecked: false, error: false },
    ]);
  };

  const handleLabelChange = (e, index) => {
    const updatedRows = [...rows];
    updatedRows[index].label = e.target.value;

    const findValueIndex = valueIndexes.find((value) => value.index === index);

    if (!findValueIndex || validateData) {
      updatedRows[index].value = e.target.value;
    }

    setRows(updatedRows);
  };

  const handleValueChange = (e, index) => {
    const updatedRows = [...rows];
    updatedRows[index].value = e.target.value;
    updatedRows[index].error = validateData && e.target.value && false;
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

  const handleRadioChange = (e) => {
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

  console.log(handleValid, "valid");

  useEffect(() => {
    if (rows.length > 0) {
      handlePreviewDetails({ ...previewDetails, type: "radio", rows: rows });

      const areRowsValid = rows.every((row) => row.value);

      handleValid(areRowsValid);
    }
  }, [rows]);

  console.log(previewDetails, "preview");

  useEffect(() => {
    if (validateData) {
      console.log(rows, "there1");
      const updatedRows = rows.map((row) => {
        console.log(row, "there2");
        if (row.value.trim() === "" && !row.error) {
          return {
            ...row,
            error: true,
          };
        } else {
          return row;
        }
      });
      setRows(updatedRows);
      handleValidateData(false);
    }
  }, [validateData, rows]);

  console.log(validateData, "validate");

  console.log(rows, "rows");

  return (
    <>
      <h2>Default Value</h2>
      {rows.length > 0 &&
        rows.map((row, i) => {
          return (
            <RadioButton
              id={row.value}
              name="default-value"
              value={row.value}
              checked={selectedValue.selectedDefaultValue === row.value}
              onChange={handleRadioChange}
              key={i}
              labelText={row.label}
            />
          );
        })}
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
              {row.error && <p>Value must be error</p>}
              <td>
                <button onClick={() => deleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
    </>
  );
}

export default RadioButtonData;
