"use client";

import React, { useState } from 'react';
import { Appliance } from '@/lib/power-math';

interface Props {
  onAdd: (app: Appliance) => void;
}

export default function ApplianceForm({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [watts, setWatts] = useState<number | ''>('' as unknown as number);
  const [hours, setHours] = useState<number | ''>(1);
  const [quantity, setQuantity] = useState<number | ''>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const w = Number(watts);
    const h = Number(hours) || 0;
    const q = Number(quantity) || 1;
    if (name.trim() && w > 0) {
      onAdd({ name: name.trim(), wattage: w, hoursPerDay: h, quantity: q });
      setName('');
      setWatts('' as unknown as number);
      setHours(1);
      setQuantity(1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-slate-50 rounded-lg border">
      <div>
        <label className="block text-xs font-medium text-gray-600">Device</label>
        <input
          className="mt-1 p-2 border rounded w-full"
          placeholder="Appliance Name (e.g., Laptop)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Appliance name"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600">Watts (W)</label>
        <input
          className="mt-1 p-2 border rounded w-full"
          type="number"
          placeholder="Watts"
          value={watts === '' ? '' : watts}
          onChange={(e) => setWatts(e.target.value === '' ? ('' as unknown as number) : Number(e.target.value))}
          aria-label="Watts"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600">Hours per day</label>
        <input
          className="mt-1 p-2 border rounded w-full"
          type="number"
          placeholder="Hours/Day"
          value={hours === '' ? '' : hours}
          onChange={(e) => setHours(e.target.value === '' ? ('' as unknown as number) : Number(e.target.value))}
          aria-label="Hours per day"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600">Quantity</label>
        <input
          className="mt-1 p-2 border rounded w-full"
          type="number"
          placeholder="Quantity"
          value={quantity === '' ? '' : quantity}
          onChange={(e) => setQuantity(e.target.value === '' ? ('' as unknown as number) : Number(e.target.value))}
          aria-label="Quantity"
        />
      </div>

      <div className="flex items-end">
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:opacity-95">
          Add Device
        </button>
      </div>
    </form>
  );
}
