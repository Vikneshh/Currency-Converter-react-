const Inputbox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  classNames = "",
  //   This is  a  commom practice to give classnames as  a props too.
}) => {
  return (
    <div className={`${classNames} bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-1/2">
        <label htmlFor="currency1" className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          id="currency1"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(parseInt(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Curreny Type</p>
        <select
          className="rounded-lg p-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Inputbox;
