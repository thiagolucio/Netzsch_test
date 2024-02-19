"use client";
import { useState } from "react";
import { SiConvertio } from "react-icons/si";

const ConvertComponent = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const loadWebAssembly = async () => {
    try {
      // https://vercel.com/docs/functions/wasm
      const conversor = await import("./convert");

      // Chamar a função exportada
      const result = conversor.ccall(
        "convertCelsiusToFahrenheit",
        "number",
        ["number"],
        [celsius]
      );
      setFahrenheit(result);
    } catch (error) {
      console.error("Erro ao carregar o módulo WebAssembly:", error);
    }
  };

  const handleConvert = () => {
    loadWebAssembly();
  };

  return (
    <div className="text-sm flex items-center justify-center">
      <label>
        Celsius:{" "}
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.valueAsNumber)}
          className="p-1 mr-1 rounded-xl w-40 border border-customPrimary text-slate-800 text-lg font-bold"
        />
      </label>
      <div className="w-12">
        <button onClick={handleConvert} type="button" className="bg-customPrimary rounded-full p-3">
          <SiConvertio className="text-lg" />
        </button>
      </div>
      {fahrenheit !== null && (
        <div className="text-slate-800">
          {celsius} Celsius/  {fahrenheit.toFixed(2)} Fahrenheit.
        </div>
      )}
    </div>
  );
};

export default ConvertComponent;
