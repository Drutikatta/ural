import React, { useState } from 'react';

const EconomicCalculator = () => {
  const [calculatorInputs, setCalculatorInputs] = useState({
    productionCost: '',
    demand: '',
    transportCost: '',
    regulatoryCost: ''
  });

  const [calculatorResult, setCalculatorResult] = useState(null);

  // Estimated unit price for revenue calculation (you can modify this)
  const estimatedUnitPrice = 100;

  const calculateEconomics = () => {
    const parse = (v) => parseFloat(v || 0);

    const totalCost =
      parse(calculatorInputs.productionCost) +
      parse(calculatorInputs.transportCost) +
      parse(calculatorInputs.regulatoryCost);

    const revenue = parse(calculatorInputs.demand) * estimatedUnitPrice;
    const profit = revenue - totalCost;
    const roi = totalCost !== 0 ? ((profit / totalCost) * 100).toFixed(2) : 0;

    setCalculatorResult({
      totalCost,
      revenue,
      profit,
      roi
    });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 px-4 py-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Economic Impact Calculator
        </h2>
        <p className="text-gray-600 text-lg">Calculate the economic viability of your nuclear project</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Progress Indicator */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2">
          <div
            className="bg-white h-full transition-all duration-500 rounded-r-full"
            style={{
              width: `${100 - (Object.values(calculatorInputs).filter((v) => v).length / 4) * 100}%`
            }}
          />
        </div>

        <div className="p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Production Cost */}
            <InputField
              label="Production Cost"
              iconColor="blue"
              prefix="$"
              suffix="USD"
              value={calculatorInputs.productionCost}
              onChange={(val) => setCalculatorInputs({ ...calculatorInputs, productionCost: val })}
            />

            {/* Market Demand */}
            <InputField
              label="Market Demand"
              iconColor="green"
              suffix="units"
              value={calculatorInputs.demand}
              onChange={(val) => setCalculatorInputs({ ...calculatorInputs, demand: val })}
            />

            {/* Transport Cost */}
            <InputField
              label="Transport Cost"
              iconColor="purple"
              prefix="$"
              suffix="USD"
              value={calculatorInputs.transportCost}
              onChange={(val) => setCalculatorInputs({ ...calculatorInputs, transportCost: val })}
            />

            {/* Regulatory Cost */}
            <InputField
              label="Regulatory Cost"
              iconColor="orange"
              prefix="$"
              suffix="USD"
              value={calculatorInputs.regulatoryCost}
              onChange={(val) => setCalculatorInputs({ ...calculatorInputs, regulatoryCost: val })}
            />
          </div>

          {/* Calculate Button */}
          <div className="text-center mb-8">
            <button
              onClick={calculateEconomics}
              disabled={!Object.values(calculatorInputs).every((v) => v)}
              className={`relative px-10 py-4 rounded-xl font-semibold text-white text-lg transform transition-all duration-300 hover:scale-105
                ${Object.values(calculatorInputs).every((v) => v)
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 cursor-not-allowed'}`}
            >
              Calculate Economics
            </button>
            {!Object.values(calculatorInputs).every((v) => v) && (
              <p className="text-sm text-gray-500 mt-2">Please fill in all fields to calculate</p>
            )}
          </div>

          {/* Results */}
          {calculatorResult && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
              <ResultCard title="Total Cost" value={calculatorResult.totalCost} color="blue" />
              <ResultCard title="Revenue" value={calculatorResult.revenue} color="green" />
              <ResultCard
                title="Profit"
                value={calculatorResult.profit}
                color={calculatorResult.profit >= 0 ? 'purple' : 'red'}
              />
              <ResultCard
                title="ROI (%)"
                value={calculatorResult.roi}
                color={calculatorResult.roi >= 0 ? 'orange' : 'red'}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// InputField Component
const InputField = ({ label, prefix, suffix, value, onChange, iconColor }) => (
  <div className="group">
    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
      <span
        className={`bg-${iconColor}-100 text-${iconColor}-600 rounded-full w-8 h-8 flex items-center justify-center mr-2`}
      >
        $
      </span>
      {label}
    </label>
    <div className="relative">
      {prefix && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
          {prefix}
        </span>
      )}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full border-2 border-gray-200 rounded-xl ${
          prefix ? 'pl-8' : 'pl-4'
        } pr-4 py-3 focus:ring-4 focus:border-${iconColor}-500 focus:ring-${iconColor}-100 transition-all hover:border-gray-300`}
        placeholder="0.00"
      />
      {suffix && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <span className="text-xs text-gray-400">{suffix}</span>
        </div>
      )}
    </div>
  </div>
);

// ResultCard Component
const ResultCard = ({ title, value, color }) => (
  <div
    className={`group relative bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
  >
    <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">{title}</h4>
    <p className={`text-3xl font-bold text-${color}-600 mt-2`}>${parseFloat(value).toLocaleString()}</p>
  </div>
);

export default EconomicCalculator;
