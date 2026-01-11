export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  alt?: string;
  seo: { title: string; description: string };
};

export const services: Service[] = [
  {
  slug: "industrial-energy-audits",
  title: "Data-Driven Energy Audits & Efficiency Modeling",
  image: "/services/service-energy-audit.jpg",
  alt: "Engineer performing an energy load profile analysis using specialized logging equipment",
  excerpt: "Quantifying operational inefficiencies through high-frequency data logging and thermodynamic modeling.",
  seo: {
    title: "Industrial Energy Audit Services | Unithium",
    description: "Unithium provides comprehensive energy audits, utilizing ML-driven load forecasting and power quality analysis to reduce industrial OPEX."
  },
  content: [
    "Unithium's energy auditing service goes beyond simple utility bill review. We deploy high-resolution power quality analyzers to capture the facility's 'Energy Fingerprint.' This involves measuring the Specific Energy Consumption (SEC) of the production line—a metric that defines the energy required per unit of output.",
    "Our methodology includes the calculation of the Energy Use Intensity (EUI) and the identification of 'Base Load' vs 'Variable Load' patterns. We model the facility's efficiency using the formula:",
    "$$\eta_{facility} = \frac{\sum E_{useful}}{\sum E_{input}}$$ ",
    "",
    "By applying regression analysis to the collected data, we identify correlations between environmental variables (temperature, humidity) and energy demand. This allows us to propose specific Energy Conservation Measures (ECMs) that typically yield a 15-25% reduction in annual energy expenditure with a clearly defined ROI."
  ]
},
  {
  slug: "hse-risk-assessment-safety",
  title: "HSE Risk Assessment & Power Safety Engineering",
  image: "/services/service-hse-consultancy.jpg",
  alt: "Electrical safety audit showing Hazard Identification and Risk Assessment (HIRA) protocols",
  excerpt: "Specialized safety consulting for high-voltage environments, including Arc Flash studies and LOTO framework development.",
  seo: {
    title: "HSE & Electrical Safety Consulting | Unithium",
    description: "Expert HSE services for industrial energy systems. We specialize in Arc Flash risk assessment, grounding system audits, and safety compliance."
  },
  content: [
    "Safety is the primary constraint in any high-voltage engineering project. Unithium provides specialized HSE consultancy focused on 'Hazard Identification and Risk Assessment' (HIRA) for complex electrical infrastructures.",
    "Our services include performing Arc Flash Hazard Analysis in accordance with IEEE 1584. We calculate the Flash Protection Boundary and determine the required Incident Energy ($E_i$) ratings for PPE. Furthermore, we conduct Grounding System Audits (Earth Resistance Testing) to ensure that the 'Touch' and 'Step' potentials remain within safe limits ($V_{touch} < V_{limit}$) during fault conditions.",
    "",
    "We also design and implement custom Lock-Out Tag-Out (LOTO) frameworks and Safe Systems of Work (SSoW) for industrial maintenance teams. This ensures that your facility not only meets international safety standards but actively prevents electrical incidents through a rigorous 'Zero Energy State' verification protocol."
  ]
},
    {
  slug: "power-system-simulation-design",
  title: "Technical Simulation & Microgrid Design Services",
  image: "/services/service-system-design.jpg",
  alt: "Software simulation of a microgrid load flow and short circuit analysis",
  excerpt: "Pre-construction modeling and simulation of industrial power systems to ensure stability and fault resilience.",
  seo: {
    title: "Microgrid Design & Simulation Services | Unithium",
    description: "Unithium offers technical design services including load flow analysis, short circuit studies, and solar-hybrid feasibility modeling."
  },
  content: [
    "Before a single cable is laid, Unithium provides high-fidelity simulations of the proposed power architecture. We utilize Load Flow Analysis to determine the steady-state performance of the network, ensuring that all conductors and transformers operate within their thermal limits.",
    "A critical part of our design service is Short Circuit Analysis. We calculate the prospective fault current ($I_{sc}$) at various nodes in the system to ensure that the Selected Protective Devices have the appropriate 'Breaking Capacity' (kA rating). The fault current is determined by the system impedance ($Z_{sys}$):",
    "$$I_{sc} = \frac{V_{sys}}{\sqrt{3} \cdot Z_{sys}}$$",
    "",
    "Additionally, we provide PV-Hybrid Feasibility Studies using meteorological data (TMY3 files) to forecast annual energy yield with 95% confidence intervals. This simulation-first approach eliminates the risk of system over-sizing or under-performance, ensuring that the capital investment is perfectly aligned with the industrial load profile."
  ]
},
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
