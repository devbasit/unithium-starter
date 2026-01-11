export interface Appliance {
  name: string;
  wattage: number;
  hoursPerDay: number;
  quantity: number;
}

// Constants based on Nigerian environmental factors and HSE standards
const SAFETY_BUFFER = 1.25; // 25% buffer for surge and longevity
const PEAK_SUN_HOURS_NIGERIA = 5.0; // Average daily sun hours
const SYSTEM_EFFICIENCY = 0.85; // 15% loss for wiring/conversion
const LITHIUM_DOD = 0.90; // Depth of Discharge for Unithium Lithium systems

/**
 * Calculates total daily energy consumption in Watt-hours (Wh)
 */
export const calculateDailyWh = (appliances: Appliance[]): number => {
  return appliances.reduce((total, app) => {
    return total + app.wattage * app.hoursPerDay * (app.quantity || 1);
  }, 0);
};

/**
 * Portable Power Station Sizing
 * Formula: Required Capacity = Total Wh * Safety Buffer
 */
export const sizePortablePowerStation = (dailyWh: number): number => {
  return Math.ceil(dailyWh * SAFETY_BUFFER);
};

/**
 * Inverter Sizing (Watts)
 * Formula: Inverter Size = Peak Simultaneous Load * Safety Buffer
 */
export const sizeInverter = (peakWatts: number): number => {
  return Math.ceil(peakWatts * SAFETY_BUFFER);
};

/**
 * Solar Array Sizing (Watts)
 * Formula: Solar Capacity = Daily Wh / (Peak Sun Hours * Efficiency)
 */
export const sizeSolarArray = (dailyWh: number): number => {
  const capacity = dailyWh / (PEAK_SUN_HOURS_NIGERIA * SYSTEM_EFFICIENCY);
  return Math.ceil(capacity);
};

/**
 * Battery Bank Sizing (Wh) for Inverter Installations
 * Formula: Battery Bank = (Daily Wh * Autonomy) / DoD
 */
export const sizeBatteryBank = (
  dailyWh: number,
  autonomyDays: number = 1
): number => {
  const bankSize = (dailyWh * autonomyDays) / LITHIUM_DOD;
  return Math.ceil(bankSize);
};
