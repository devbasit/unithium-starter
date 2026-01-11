export type Project = {
  slug: string;
  title: string;
  image: string;
  alt: string;
  excerpt: string;
  seo?: {
    title: string;
    description: string;
  };
  content: string[];  
};

export const projects: Project[] = [
  {
    slug: "industrial-power-stations",
    title: "Industrial Power Station Units (Series-I)",
    image: "/projects/project-industrial-power.jpg",
    alt: "Technical rendering of Unithium Series-I power station with modular battery racks",
    excerpt: "High-density LFP energy storage systems engineered for 1C/1C charge-discharge cycles and N+1 inverter redundancy.",
    seo: {
      title: "Industrial Energy Storage & Power Stations | Unithium",
      description: "Technical specifications of Unithium's industrial units: 48V/HV DC architectures, LiFePO4 chemistry, and 98% conversion efficiency."
    },
    content: [
      String.raw`The Unithium Series-I Power Station is engineered for the high-surge demands of industrial machinery. At the core of the unit is a high-cycle LiFePO4 (Lithium Iron Phosphate) battery array designed for a 1C discharge rate, allowing the system to handle peak currents without significant voltage sag.`,
      String.raw`The architecture utilizes a balanced DC bus (available in 48V or High-Voltage configurations) to minimize $I^2R$ losses across the internal interconnects. Our thermal management system is modeled using computational fluid dynamics to ensure that even under full load, the Delta-T ($\Delta T$) across the cells remains below 5°C, significantly extending the life of the electrolyte.`,
      String.raw``,
      String.raw`Standard specifications include a Pure Sine Wave output with Total Harmonic Distortion ($THD < 3\%$) and a peak conversion efficiency of 98%. The units are housed in IP65-rated enclosures, making them resilient to the dust and humidity levels typically found in Nigerian manufacturing environments.`
    ],
  },
  {
    slug: "hybrid-microgrid-integration",
    title: "Hybrid Microgrid Control & Integration",
    image: "/projects/project-hybrid-system.jpg",
    alt: "Single-line diagram of a hybrid microgrid with integrated diesel and solar sources",
    excerpt: "Advanced synchronization logic for multi-source microgrids, achieving up to 70% reduction in Specific Fuel Consumption (SFC).",
    seo: {
      title: "Hybrid Microgrid Engineering & Integration | Unithium",
      description: "Optimizing industrial power through hybrid integration. Learn about our fuel displacement algorithms and grid-forming inverter technology."
    },
    content: [
      String.raw`Our hybrid integration service focuses on the physical synchronization of Inverter-Based Resources (IBR) with traditional rotating machinery. We utilize Grid-Forming (GFM) inverter topology to provide virtual inertia to the microgrid, preventing frequency instability when heavy motors (e.g., compressors or pumps) are engaged.`,
      String.raw``,
      String.raw`The economic value of our hybrid installations is quantified through the reduction of Specific Fuel Consumption (SFC). By implementing a 'Load-Following' algorithm, we ensure the thermal generator operates strictly at its Most Efficient Point (MEP). The fuel savings ($F_{saved}$) is modeled as:`,
      String.raw`$$F_{saved} = \sum (SFC_{base} \cdot L_{base}) - \sum (SFC_{hybrid} \cdot L_{hybrid})$$`,
      String.raw`Where $L$ is the load in kWh. In field-simulated conditions, Unithium-engineered microgrids consistently demonstrate a reduction in engine run-hours by 60-75%, leading to a direct extension of the Mean Time Between Overhauls (MTBO).`
    ],
  },
  {
    slug: "intelligent-distribution-quality",
    title: "Power Quality & Distribution Units (PQ-PDU)",
    image: "/projects/project-distribution-unit.jpg",
    alt: "Internal schematic of an intelligent PDU with harmonic filtering and sub-metering",
    excerpt: "Smart distribution units designed for phase balancing, harmonic mitigation, and IEEE 519 compliance.",
    seo: {
      title: "Intelligent Power Distribution Units | Unithium Engineering",
      description: "Unithium's PQ-PDU units offer branch-level monitoring, surge protection, and active power factor correction for industrial loads."
    },
    content: [
      String.raw`Unithium PQ-PDUs (Power Quality Distribution Units) are engineered to solve the 'Dirty Power' problem inherent in many industrial zones. Beyond simple circuit protection, these units perform real-time Phase Balancing to minimize neutral currents and prevent transformer overheating.`,
      String.raw`Each PDU is equipped with Class 1 high-speed monitoring that calculates the Total Harmonic Distortion ($THD$) for both voltage and current:`,
      String.raw`$$THD = \frac{\sqrt{\sum_{n=2}^{\infty} V_n^2}}{V_1}$$`,
      String.raw`Where $V_1$ is the fundamental frequency (50Hz) and $V_n$ are the harmonic components. By keeping $THD_v < 5\%$, we protect sensitive electronics from premature failure. The units also feature multi-stage Surge Protective Devices (SPD) capable of absorbing transients up to 40kA, providing a robust shield against atmospheric lightning and grid switching surges.`,
      String.raw``,
      String.raw`For facilities with a low lagging power factor, our PDUs can be configured with automated capacitor banks or active power filters to maintain $\cos \phi \geq 0.95$, effectively eliminating utility penalties and reducing the apparent power ($S$) demand on the system.`
    ],
  }
];
