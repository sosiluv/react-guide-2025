export default function InputCalculator({ userInput, onChangInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangInput("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangInput("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangInput("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => onChangInput("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
