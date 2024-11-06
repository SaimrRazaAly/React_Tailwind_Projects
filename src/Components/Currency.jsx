// src/components/CurrencyConverter.js
import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("eur");
  const [result, setResult] = useState(0);

  useEffect(() => {
    // Fetch currency rates
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@1/latest/currencies/usd.json"
    )
      .then((response) => response.json())
      .then((data) => setRates(data.usd));
  }, []);

  const convert = () => {
    if (fromCurrency === toCurrency) {
      setResult(amount);
    } else {
      const rate = rates[toCurrency];
      setResult(amount * rate);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-5 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Currency Converter</h2>
      <div className="flex flex-col space-y-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <div className="flex justify-between">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200 w-1/2 mr-2"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
          <span className="self-center">to</span>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200 w-1/2 ml-2"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={convert}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Convert
        </button>
      </div>
      <h3 className="mt-4 text-xl">
        Result: {result} {toCurrency.toUpperCase()}
      </h3>
    </div>
  );
};

export default CurrencyConverter;
