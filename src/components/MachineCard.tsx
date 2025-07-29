// components/MachineryCard.tsx
import React from "react";

interface MachineryProps {
  machine_img?: string;
  category: string;
  brand?: string;
  model?: string;
  kva: number;
  kw: number;
  voltage?: string;
  price?: string;
}

const MachineryCard: React.FC<MachineryProps> = ({
  machine_img,
  category,
  brand,
  model,
  kva,
  kw,
  voltage,
  price,
}) => {
  return (
    <div className="rounded-2xl shadow-md bg-white p-4 max-w-sm hover:shadow-xl transition duration-300">
      <img
        src={machine_img || "/placeholder-machine.png"}
        alt={`${brand} ${model}`}
        className="rounded-xl w-full h-48 object-cover mb-4"
        loading="lazy"
      />
      <h2 className="text-xl font-semibold text-gray-800">
        {category} {brand && `– ${brand}`}
      </h2>
      <p className="text-sm text-gray-500">{model}</p>
      <div className="mt-2 text-sm text-gray-700">
        <p>KVA: {kva}</p>
        <p>KW: {kw}</p>
        {voltage && <p>Voltage: {voltage}</p>}
      </div>
      {price && (
        <p className="mt-3 text-lg font-bold text-blue-600">KES {price}</p>
      )}
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        View Details
      </button>
    </div>
  );
};

export default MachineryCard;

// Usage example
<MachineryCard category="Excavator" kva={100} kw={75} />
