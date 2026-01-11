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
  excerpt:
    "Identifying operational inefficiencies through detailed measurement, analysis, and system-level energy evaluation.",

  seo: {
    title: "Industrial Energy Audit Services | Unithium",
    description:
      "Unithium delivers in-depth industrial energy audits to uncover inefficiencies, improve system performance, and reduce operating costs."
  },

  content: [
    "Unithium’s energy auditing service goes beyond surface-level reviews. We conduct detailed on-site assessments using advanced monitoring tools to understand how energy is consumed across your facility.",
    "By analyzing load behavior, operating patterns, and equipment performance, we identify areas where energy is wasted or underutilized. This includes distinguishing between constant background consumption and demand that fluctuates with operations.",
    "Our findings are translated into practical improvement opportunities—such as equipment optimization, operational adjustments, and control enhancements—that improve efficiency without disrupting production.",
    "Each audit concludes with a clear set of recommendations prioritized by impact, feasibility, and return on investment, enabling informed decisions and measurable cost savings."
  ]
  },

  {
  slug: "hse-risk-assessment-safety",
  title: "HSE Risk Assessment & Power Safety Engineering",
  image: "/services/service-hse-consultancy.jpg",
  alt: "Electrical safety audit showing Hazard Identification and Risk Assessment (HIRA) protocols",
  excerpt:
    "Specialized safety assessments and engineering controls for high-voltage and industrial power environments.",

  seo: {
    title: "HSE & Electrical Safety Consulting | Unithium",
    description:
      "Unithium provides expert HSE and electrical safety consulting, helping organizations reduce risk and maintain compliance in power systems."
  },

  content: [
    "Safety is fundamental to every power system we design or assess. Unithium provides specialized HSE consulting focused on identifying, evaluating, and mitigating electrical hazards in industrial environments.",
    "Our assessments examine fault risks, protective coordination, grounding effectiveness, and operational safety practices to ensure systems perform safely under both normal and abnormal conditions.",
    "We work closely with facility teams to establish clear safety procedures, maintenance protocols, and control measures that reduce exposure to electrical incidents during operations and servicing.",
    "The result is a safer working environment, improved compliance with recognized standards, and practical safeguards that protect both personnel and critical infrastructure."
  ]
  },

  {
  slug: "power-system-simulation-design",
  title: "Technical Simulation & Microgrid Design Services",
  image: "/services/service-system-design.jpg",
  alt: "Software simulation of a microgrid load flow and short circuit analysis",
  excerpt:
    "Simulation-led design of power systems to ensure reliability, scalability, and fault resilience before deployment.",

  seo: {
    title: "Microgrid Design & Simulation Services | Unithium",
    description:
      "Unithium provides power system design and simulation services to ensure stable, efficient, and resilient energy infrastructure."
  },

  content: [
    "Before implementation, Unithium develops detailed simulations of proposed power systems to evaluate performance under real operating conditions.",
    "These studies help verify that equipment is correctly sized, power flows are balanced, and protection systems operate as intended—reducing the risk of costly design errors.",
    "For hybrid and microgrid projects, we assess generation sources, storage options, and demand profiles to ensure the system delivers reliable power while remaining flexible for future expansion.",
    "This simulation-first approach provides confidence that the final design will meet operational requirements, withstand faults, and deliver long-term performance aligned with investment goals."
  ]
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
