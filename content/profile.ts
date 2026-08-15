/**
 * Single source of truth for every factual claim on this site.
 *
 * Rule for future edits: nothing goes in this file that isn't verified.
 * Status stamps ("In production", "In pilot") appear only where delivery
 * stage is known — a blank status is correct, an assumed one is not.
 */

export const identity = {
  name: 'Freddy Muleya',
  role: 'Senior Software Engineer',
  specialism: '.NET',
  location: 'Johannesburg, South Africa',
  availability: 'Open to senior roles — South Africa and remote worldwide',
  email: 'freddymuleya16@gmail.com',
  phone: '+27 76 569 0847',
  phoneHref: 'tel:+27765690847',
  linkedin: 'https://www.linkedin.com/in/freddymuleya16',
  github: 'https://github.com/freddymuleya16',
} as const;

export const positioning =
  'Senior software engineer and .NET specialist with five years building production systems across public healthcare, enterprise financial services and UK insurtech.';

export const bio = [
  'I build systems that people depend on to do their jobs — the kind where an outage means meals do not reach a ward, or a case file stalls in a mortuary. Five years of that work, across public healthcare, enterprise financial services and UK insurtech.',
  'I was promoted to Senior Software Engineer within a year at the Western Cape Government, where I am sole developer of a hospital meal ordering system running across 52 public hospitals, and lead developer on the province’s internal component marketplace. Two years of proven remote delivery.',
] as const;

/** Facts stated as a register, not as counter boxes. */
export const facts = [
  { label: 'Engineering since', value: 'April 2021', note: 'Five years' },
  { label: '.NET', value: 'Entire career', note: 'Running .NET 8, 9 and 10 in production' },
  { label: 'Hospitals served', value: '52', note: 'Every ward, every admitted patient' },
  { label: 'Remote delivery', value: 'Two years', note: 'Cape Town team, based in Johannesburg' },
] as const;

export type SystemEntry = {
  slug: string;
  name: string;
  department: string;
  jurisdiction: string;
  role: string;
  /** Compact forms for the hero register, where columns are fixed-width. */
  shortDepartment: string;
  shortRole: string;
  /** Only set where the delivery stage is known. */
  status?: 'In production' | 'In pilot';
  summary: string;
  detail: string;
  stack: readonly string[];
  icon: 'tray' | 'grid' | 'cycle' | 'case' | 'clipboard' | 'layers';
};

/** Order is deliberate — most consequential first. */
export const systems: readonly SystemEntry[] = [
  {
    slug: 'hospital-meal-ordering',
    name: 'Hospital Meal Ordering & Delivery',
    department: 'Department of Health',
    jurisdiction: 'Western Cape Government',
    role: 'Sole developer',
    shortDepartment: 'Health',
    shortRole: 'Sole developer',
    status: 'In production',
    summary: 'Meals from hospital kitchens to patients across 52 public hospitals.',
    detail:
      'Designed, built and delivered to production the system managing meal ordering and delivery from hospital kitchens to patients across 52 Western Cape public hospitals — covering every ward and every admitted patient at roughly three meals a day, including enteral feeds.',
    stack: ['.NET', 'Blazor', 'SQL Server', 'Azure App Services'],
    icon: 'tray',
  },
  {
    slug: 'component-marketplace',
    name: 'Component Marketplace',
    department: 'Transversal Applications (TAPS)',
    jurisdiction: 'Western Cape Government',
    role: 'Lead developer',
    shortDepartment: 'Transversal Applications',
    shortRole: 'Lead developer',
    summary: 'One place for government development teams to publish and reuse approved components.',
    detail:
      'An internal marketplace giving Western Cape Government development teams one place to publish and reuse approved components, standards and templates. Built upload and download, peer review with an approve and reject workflow, and component versioning. Led delivery and directed a second developer added later.',
    stack: ['.NET', 'Blazor', 'SQL Server', 'Azure'],
    icon: 'grid',
  },
  {
    slug: 'laundry-management',
    name: 'Laundry Management',
    department: 'Department of Health',
    jurisdiction: 'Western Cape Government',
    role: 'Took over and delivered',
    shortDepartment: 'Health',
    shortRole: 'Took over, delivered',
    status: 'In production',
    summary: 'A recovered project, now live in every hospital and clinic in the province.',
    detail:
      'Took over an overdue project abandoned by two previous developers, with no budget remaining and UAT blocked because the client could not understand the system. Reviewed and simplified it, stabilised delivery, and moved it through UAT into pilot within one month. Now live across every hospital and clinic in the Western Cape, replacing a manual paper process.',
    stack: ['.NET', 'SQL Server', 'Azure'],
    icon: 'cycle',
  },
  {
    slug: 'forensic-pathology',
    name: 'Forensic Pathology System',
    department: 'Forensic Pathology Services',
    jurisdiction: 'Western Cape Government',
    role: 'Front-end developer, then system owner',
    shortDepartment: 'Forensic Pathology',
    shortRole: 'Front-end, then owner',
    status: 'In pilot',
    summary: 'Every screen across the case lifecycle, from incident logging to body release.',
    detail:
      'Joined as front-end developer on a system with a working back end and an unbuilt front end. Rebuilt every screen across the case lifecycle — incident logging, body intake, coordination between pathologists, police, investigating officers and undertakers, autopsy and post-mortem, and body release. Took ownership of the whole system when the back-end developer left, brought it from back-end-only to a working full-stack application, and delivered it through UAT into pilot.',
    stack: ['.NET', 'Angular', 'SQL Server'],
    icon: 'case',
  },
  {
    slug: 'ulwaluko-monitoring',
    name: 'Ulwaluko Monitoring & Evaluation',
    department: 'Cultural Affairs & Sport',
    jurisdiction: 'Western Cape Government',
    role: 'Module developer',
    shortDepartment: 'Cultural Affairs & Sport',
    shortRole: 'Module developer',
    summary: 'Site visits, assessments and incident follow-up under the Customary Initiation Act.',
    detail:
      'Built the monitoring and evaluation module for the province’s traditional initiation oversight system, enabling DCAS officials to conduct and record site visits and assessments at both registered and unregistered initiation schools, log incidents at legal and illegal sites, and track follow-ups and interventions through to resolution. Supports the Customary Initiation Act.',
    stack: ['.NET', 'SQL Server', 'Azure'],
    icon: 'clipboard',
  },
];

export type EarlierProject = {
  name: string;
  context: string;
  detail: string;
};

export const earlierWork: readonly EarlierProject[] = [
  {
    name: 'Ping Insure',
    context: 'UK GAP motor insurance',
    detail:
      'Built the aggregator integration connecting quotation and premium calculation to a third-party comparison aggregator.',
  },
  {
    name: 'MoneySage',
    context: 'UK mortgage and insurance advisory',
    detail: 'Delivered as part of the build team.',
  },
  {
    name: 'Stubben Edge',
    context: 'London financial services technology group',
    detail:
      'Full-stack feature delivery on a marketplace giving brokers and advisers access to 100+ insurance, savings and investment products.',
  },
];

export type Post = {
  title: string;
  employer: string;
  place: string;
  start: string;
  end: string;
  period: string;
  note?: string;
  detail: string;
  current?: boolean;
};

export const career: readonly Post[] = [
  {
    title: 'Senior Software Engineer (.NET)',
    employer: 'African Ideas',
    place: 'Cape Town — remote from Johannesburg',
    start: 'June 2024',
    end: 'Present',
    period: 'Jun 2024 — Present',
    note: 'Joined as Intermediate Software Engineer, promoted to Senior after one year',
    detail:
      'Contracted to the Western Cape Government — Departments of Health, and Cultural Affairs & Sport.',
    current: true,
  },
  {
    title: 'Associate Software Developer',
    employer: 'Sybrin SA (Pty) Ltd',
    place: 'Johannesburg',
    start: 'September 2022',
    end: 'June 2024',
    period: 'Sep 2022 — Jun 2024',
    detail:
      'Enterprise financial services clients: Hollard, Nedbank, Absa, Sanlam and Glacier.',
  },
  {
    title: 'Developer',
    employer: 'Full Stack (Pty) Ltd',
    place: 'Cape Town',
    start: 'January 2022',
    end: 'September 2022',
    period: 'Jan 2022 — Sep 2022',
    detail: 'UK fintech and insurtech clients: Stubben Edge, Ping Insure and MoneySage.',
  },
  {
    title: 'Software Developer',
    employer: 'eGrowth (Pty) Ltd',
    place: 'Johannesburg',
    start: 'April 2021',
    end: 'January 2022',
    period: 'Apr 2021 — Jan 2022',
    detail: 'Graduate developer programme.',
  },
];

export const credentials = [
  {
    label: 'Education',
    title: 'BSc Computer Science',
    body: 'University of Limpopo, 2016 — 2020',
  },
  {
    label: 'Certification',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    body: '2021',
  },
] as const;

export const stack = [
  {
    group: '.NET',
    items: [
      'C#',
      '.NET 5 — 10',
      'ASP.NET Core',
      'ASP.NET MVC',
      'Blazor',
      'Web API',
      'Entity Framework',
      'LINQ',
      'Xamarin',
    ],
  },
  {
    group: 'Front-end',
    items: ['Angular', 'React', 'JavaScript', 'HTML', 'CSS', 'Responsive UI/UX'],
  },
  {
    group: 'Data',
    items: [
      'SQL Server',
      'T-SQL',
      'Stored procedures',
      'Relational design',
      'Batch processing',
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      'Azure App Services',
      'Azure AD B2C',
      'Azure DevOps',
      'GitHub Actions',
      'CI/CD pipelines',
      'AWS',
      'On-premise IIS',
      'Authentication & authorisation',
    ],
  },
  {
    group: 'Tooling',
    items: ['Git', 'GitHub', 'GitHub Copilot'],
  },
] as const;
