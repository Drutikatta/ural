import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

// Static economic data by country and sector
const globalEconomyData = [
  { country: 'USA', medical: 4500, agriculture: 1200, research: 2800, space: 1800 },
  { country: 'Germany', medical: 2100, agriculture: 800, research: 1900, space: 600 },
  { country: 'Japan', medical: 1900, agriculture: 400, research: 2200, space: 1100 },
  { country: 'France', medical: 1600, agriculture: 600, research: 1400, space: 800 },
  { country: 'Canada', medical: 1200, agriculture: 500, research: 900, space: 400 },
  { country: 'UK', medical: 1400, agriculture: 300, research: 1100, space: 500 }
];

const CombinedCharts = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Global Nuclear Technology Sector Analysis
      </h2>

      {/* Grouped Bar Chart */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-semibold text-center mb-4">
          Market Value by Sector and Country (Grouped)
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={globalEconomyData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="medical" fill="#3B82F6" name="Medical" />
            <Bar dataKey="agriculture" fill="#10B981" name="Agriculture" />
            <Bar dataKey="research" fill="#8B5CF6" name="Research" />
            <Bar dataKey="space" fill="#F59E0B" name="Space" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Stacked Bar Chart */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-semibold text-center mb-4">
          Total Contribution by Country (Stacked)
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={globalEconomyData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="medical" stackId="a" fill="#3B82F6" name="Medical" />
            <Bar dataKey="agriculture" stackId="a" fill="#10B981" name="Agriculture" />
            <Bar dataKey="research" stackId="a" fill="#8B5CF6" name="Research" />
            <Bar dataKey="space" stackId="a" fill="#F59E0B" name="Space" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CombinedCharts;
