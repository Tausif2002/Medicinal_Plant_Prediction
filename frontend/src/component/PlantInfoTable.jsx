import React from 'react';

const PlantTable = ({ plantData }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Plant Information Table</h1>
      <table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Scientific Name</th>
            <th className="px-4 py-2 text-left">Family</th>
          </tr>
        </thead>
        <tbody>
          {plantData.map((plant, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="px-4 py-2">{plant.name}</td>
              <td className="px-4 py-2">{plant.scientificName}</td>
              <td className="px-4 py-2">{plant.family}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlantTable;
