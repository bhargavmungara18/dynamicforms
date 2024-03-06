function Fo() {
  const arr = ["first", "second", "third"];

  return (
    <>
      <div className="container">
        <h1>User Access Request</h1>
        <div>
          <div className="form-container">
            <div className="first-row">
              <div className="form-group">
                <label>VSAD:</label>
                <select className="vsad-input">
                  <option value="">Select</option>
                </select>
              </div>
              <div className="custodian-group">
                <label>Custodian:</label>
                <input type="text" readOnly />
              </div>
            </div>
            <div className="form-group">
              <label>Environment:</label>
              <select className="environment-input">
                <option value="">Select</option>
                <option value="Non prod">Non prod</option>
              </select>
            </div>
            <div className="form-group">
              <label>Reference ID:</label>
              <input className="reference-input" type="text" />
            </div>
            <div className="form-group select-group">
              <label>Database Names:</label>

              <select className="custom-select">
                <option></option>
                {arr.map((a) => {
                  return <option>{a}</option>;
                })}
              </select>
            </div>
            <div className="btns">
              <button>Save and Submit</button>
              <button>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fo;
