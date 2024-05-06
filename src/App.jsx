import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
// Use id hook
// You can see this in most of the companies.
// What is does is generate a unque id when called.
import Input from "./components/Input";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  // Grabbing all the options from that currency info
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    // Just swapping the to and from values will actually swap them all.
    setConvertedAmount(amount);
    setAmount(setConvertedAmount);
    // Also swapping the values of them too
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="w-full ">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/40">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* 1st input box */}
            <div className="w-full mb-1">
              <Input
                label="to"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled={true}
              />
            </div>
            {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            {/* 2nd input box */}
            <div className="w-full mb-1">
              <Input
                label="from"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectedCurrency={from}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md px-2 py-0.5"
            >
              {" "}
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
