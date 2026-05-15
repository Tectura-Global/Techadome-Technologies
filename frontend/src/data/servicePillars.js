import images from '../imports/images'

const servicePillars = [
  {
    id: 1,
    title: "Managed Security Services (MSSP)",
    slug: "managed-security-services",
    imgSrc: images.services_1,
    description: "South Africa is one of the most targeted countries for cybercrime on the African continent. Regulatory obligations have made security a legal requirement, not a choice. Techadome's MSSP offering gives SMEs and mid-market businesses access to enterprise-grade security without the overhead of an in-house security team.",
    whatsIncluded: [
      "Managed Next-Generation Firewall (NGFW), powered by Fortinet FortiGate",
      "SIEM monitoring and alerting with NOC escalation",
      "Monthly vulnerability scanning and quarterly reporting",
      "Compliance readiness assessment with technical control implementation",
      "Email security and anti-phishing management via Mimecast",
      "Cybersecurity awareness training and phishing simulations"
    ],
    extraInfo: "Monthly managed service subscription, per site or per device. Once-off compliance readiness assessments available as standalone engagements."
  },
  {
    id: 2,
    title: "Network Infrastructure as a Service",
    slug: "network-infrastructure-as-a-service",
    imgSrc: images.services_2,
    description: "Enterprise networking used to require enterprise budgets and in-house expertise. Techadome changes that. We design, deploy, and manage your entire network: switches, routing, VLAN segmentation, and wireless, as a flat monthly subscription. No capital expenditure. No guesswork.",
    whatsIncluded: [
      "Full network design and implementation (LAN/WAN/WLAN)",
      "Managed switches and routing via HPE Aruba or Cisco Meraki",
      "Enterprise Wi-Fi with site surveys and heat-mapping",
      "VLAN segmentation and inter-VLAN routing",
      "Network-as-a-Service (NaaS) subscription model available"
    ],
    extraInfo: "Best for: Professional services firms, medical practices, retail chains, and commercial office parks."
  },
  {
    id: 3,
    title: "Smart Building & Structured Cabling",
    slug: "smart-building-structured-cabling",
    imgSrc: images.services_3,
    description: "The Tectura partnership means Techadome is in the building before it is finished. We work alongside architects and construction teams to specify and oversee the technology infrastructure of commercial buildings from the ground up.",
    whatsIncluded: [
      "Network infrastructure design during architectural planning phases",
      "Structured cabling specification and QA oversight (Cat6/Cat6A, fibre optic, MDF/IDF)",
      "IP surveillance (CCTV) design and deployment",
      "Access control and intercom integration",
      "Building Management System (BMS) and IoT sensor network design",
      "Smart lighting and HVAC automation network infrastructure"
    ],
    extraInfo: "Almost no other IT company in South Africa's SME and mid-market space is doing smart building integration at this level. This is a genuine first-mover opportunity."
  },
  {
    id: 4,
    title: "SD-WAN & Connectivity Management",
    slug: "sd-wan-connectivity-management",
    imgSrc: images.services_4,
    description: "South Africa's WAN landscape is fragmented. Businesses juggle fibre, LTE, and MPLS contracts from multiple ISPs with no centralised visibility or failover logic. Load-shedding has accelerated demand for resilient, dual-ISP architectures. SD-WAN solves this, and Techadome delivers it as a managed service.",
    whatsIncluded: [
      "Vendor-neutral SD-WAN design and deployment",
      "ISP aggregation and intelligent failover configuration",
      "Centralised WAN monitoring and performance dashboards",
      "Branch office and hybrid workforce connectivity",
      "Cost optimisation across existing ISP contracts"
    ],
    extraInfo: "Achieve carrier-grade reliability with automatic failover, application-aware routing, and centralised policy control. Significantly reduces downtime during load-shedding and improves SaaS application performance (Teams, Salesforce, Sage, etc.)."
  },
  {
    id: 5,
    title: "Cloud & Microsoft 365 Services",
    slug: "cloud-microsoft-365-services",
    imgSrc: images.services_5,
    description: "Microsoft 365 and Azure are the backbone of modern business productivity in South Africa. Techadome handles everything from initial licensing and tenant setup to complex hybrid cloud migrations, with Azure's local datacenters in Johannesburg and Cape Town keeping your data in-country.",
    whatsIncluded: [
      "Microsoft 365 licensing and tenant configuration",
      "Azure AD setup, identity management, and MFA rollout",
      "Exchange Online migration and Teams deployment",
      "Azure Backup and Disaster Recovery as a Service",
      "Hybrid cloud connectivity (site-to-site VPN, ExpressRoute)",
      "Ongoing Microsoft 365 support and license management"
    ],
    extraInfo: "Monthly recurring via Microsoft CSP programme: predictable billing for clients, consistent revenue for Techadome."
  },
  {
    id: 6,
    title: "IT Support & NOC Services",
    slug: "it-support-noc-services",
    imgSrc: images.services_6,
    description: "For businesses that want proactive IT management without the cost of an in-house team, Techadome's helpdesk and NOC service is the answer. We monitor, alert, and respond so your team can focus on the business.",
    whatsIncluded: [
      "Business-hours helpdesk support (remote and on-site)",
      "24/7 network monitoring and alerting (NOC-as-a-Service)",
      "Incident response and escalation management",
      "Monthly infrastructure health reports",
      "Patch management and firmware update scheduling"
    ],
    extraInfo: "This is Techadome's land-and-expand service: the entry point for clients who grow into full MSSP and infrastructure managed contracts."
  },
  {
    id: 7,
    title: "Cybersecurity Awareness Training",
    slug: "cybersecurity-awareness-training",
    imgSrc: images.services_7,
    description: "Technology alone does not prevent breaches. People do. Techadome delivers staff security training as a managed, recurring programme.",
    whatsIncluded: [
      "Quarterly staff cybersecurity awareness workshops",
      "Simulated phishing campaigns with detailed reporting",
      "Data protection policy development",
      "Cisco Networking Academy skills training partnerships"
    ],
    extraInfo: "No hardware required. Fully scalable. High perceived value. A natural add-on to any managed security contract."
  }
];

export default servicePillars;