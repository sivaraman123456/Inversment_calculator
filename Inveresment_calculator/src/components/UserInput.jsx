const UserInput = ({onChange,userInput}) => {
    return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => {
              onChange("initialInvestment", e.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Annual Investment</label>

          <input
            type="number"
            value={userInput.annualIvestment}
            onChange={(e) => {
              onChange("annualIvestment", e.target.value);
            }}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>

          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => {
              onChange("expectedReturn", e.target.value);
            }}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Duration</label>

          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => {
              onChange("duration", e.target.value);
            }}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
