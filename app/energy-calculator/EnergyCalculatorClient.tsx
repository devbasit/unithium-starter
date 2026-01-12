"use client";

import React, { useEffect, useMemo, useState } from "react";
import ApplianceForm from "@/app/components/calculators/ApplianceForm";
import {
  Appliance,
  calculateDailyWh,
  sizePortablePowerStation,
  sizeInverter,
  sizeSolarArray,
} from "@/lib/power-math";

export default function EnergyCalculatorClient() {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [solarArraySize, setSolarArraySize] = useState<number | null>(null);
  const [inverterSize, setInverterSize] = useState<number | null>(null);
  const [batterySize, setBatterySize] = useState<number | null>(null);

  const handleAddAppliance = (appliance: Appliance) => {
    setAppliances((prev) => [...prev, appliance]);
  };

  const handleRemoveAppliance = (index: number) => {
    setAppliances((prev) => prev.filter((_, i) => i !== index));
  };

  const dailyWh = useMemo(() => calculateDailyWh(appliances), [appliances]);

  useEffect(() => {
    setSolarArraySize(sizeSolarArray(dailyWh));
    setInverterSize(sizeInverter(dailyWh));
    setBatterySize(sizePortablePowerStation(dailyWh));
  }, [dailyWh]);

  return (
    <div>
      <h1>Energy Calculator</h1>
      <ApplianceForm onAdd={handleAddAppliance} />
      <div>
        <h2>Appliances</h2>
        <ul>
          {appliances.map((appliance, index) => (
            <li key={index}>
              {appliance.name} - {appliance.wattage}W -{" "}
              {appliance.hoursPerDay} hours - Quantity: {appliance.quantity}
              <button onClick={() => handleRemoveAppliance(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>System Size Recommendations</h2>
        <p>Solar Array Size: {solarArraySize} kW</p>
        <p>Inverter Size: {inverterSize} kW</p>
        <p>Battery Size: {batterySize} kWh</p>
      </div>
    </div>
  );
}