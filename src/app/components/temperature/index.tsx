'use client';
import React, { useState } from 'react';

const ConvertComponent = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(null);

  const loadWebAssembly = async () => {
    try {
      // VEJA ESSE LINK PARA IMPLEMENTAR
      // https://vercel.com/docs/functions/wasm
      const conversor = await import('./convert'); // Ajuste o caminho conforme necessário

      // Chamar a função exportada
      const result = conversor.ccall('celsiusToFahrenheit', 'number', ['number'], [celsius]);
      setFahrenheit(result);
    } catch (error) {
      console.error('Erro ao carregar o módulo WebAssembly:', error);
    }
  };

  const handleConvert = () => {
    loadWebAssembly();
  };

  return (
    <div>
      <h1>Conversor de Celsius para Fahrenheit</h1>
      <label>
        Celsius:
        <input type="number" value={celsius} onChange={(e) => setCelsius(e.target.valueAsNumber)} />
      </label>
      <button onClick={handleConvert}>Converter</button>
      {fahrenheit !== null && (
        <p>
          {celsius} Celsius é igual a {fahrenheit.toFixed(2)} Fahrenheit.
        </p>
      )}
    </div>
  );
};

export default ConvertComponent;
