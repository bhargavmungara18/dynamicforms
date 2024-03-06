import { createRoot } from "react-dom/client";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Elements from "./Elements";
import Modal from "./Modal";
import { FormContextProvider } from "./contexts/FormContext";
import FieldModalContent from "./FieldModalContent";
import Preview from "./Preview";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFieldType, setSelectedFieldType] = useState(null);
  const [validateData, setValidateData] = useState(false);
  const [isValid, setIsValid] = useState(false);

  function openModal(fieldType) {
    setShowModal(true);
    setSelectedFieldType(fieldType);
  }

  function closeModal() {
    setShowModal(false);
  }

  function handleValidateData(value) {
    setValidateData(value);
  }

  function handleValid(value) {
    setIsValid(value);
  }

  return (
    <FormContextProvider>
      <div>
        <h1>Dynamic Form Creator</h1>
        <div className="main">
          {/* remove the handlechange function */}
          <Sidebar openModal={openModal} />
          <Elements />
        </div>
        {showModal && (
          <Modal>
            <div className="modal">
              <FieldModalContent
                fieldType={selectedFieldType}
                handleValidateData={handleValidateData}
                validateData={validateData}
                isValid={isValid}
                handleValid={handleValid}
              />
              <Preview
                fieldType={selectedFieldType}
                onClose={closeModal}
                validateData={validateData}
                handleValidateData={handleValidateData}
                isValid={isValid}
                handleValid={handleValid}
              />
              <button onClick={closeModal}>Close</button>
            </div>
          </Modal>
        )}
      </div>
    </FormContextProvider>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
