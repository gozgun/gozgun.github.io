// Experience page content. Each bullet carries skill tags for the Toolkit filter.
// `uses` marks tools used throughout a role, which highlights the whole role card.

export type Bullet = { text: string; tags: string[] };
export type Role = {
  mono: string;
  color: string;
  ink: string;
  meta: string;
  title: string;
  uses?: string[];
  bullets: Bullet[];
};

export const toolkit: { name: string; skills: string[] }[] = [
  { name: 'Product', skills: ['User research', 'Prototyping', 'Roadmapping', 'User stories', 'Acceptance criteria', 'Figma'] },
  { name: 'AI', skills: ['LLM evaluation', 'Responsible AI', 'Prompt engineering', 'Claude Code', 'Cursor'] },
  { name: 'Build', skills: ['Python', 'TypeScript', 'React', 'Django', 'SQL', 'AWS'] },
];

export const certificate = 'Aha! Product Management Professional, 2025';

export const toolNote = 'prototyping and verifying results';

export const work: Role[] = [
  {
    mono: 'S', color: 'var(--accent)', ink: '#FFFFFF',
    meta: '03/2026 – now · Lausanne',
    title: 'Product Engineer at Scholé',
    uses: ['Claude Code', 'Cursor'],
    bullets: [
      { text: 'Replaced a USD 3,600/yr credentialing vendor with an in-house system I shipped in 5 days, issuing 688 credentials to 423 learners with one-click LinkedIn sharing.', tags: ['User stories', 'Acceptance criteria', 'Python', 'Django'] },
      { text: 'Turned power-user interviews into an approved redesign of AI lesson creation that converts free-text prompts into structured input for the generation agent.', tags: ['User research', 'Roadmapping', 'Prototyping', 'Prompt engineering'] },
      { text: 'Owned the feedback loop with B2B partners such as Harvard Data Science Initiative, turning their needs into prioritized requirements and pilots into published case studies.', tags: ['User research', 'Roadmapping', 'User stories'] },
      { text: 'Improved the reliability of AI lessons and recommendations with prompt evaluations, regression tests, guardrails against hallucinated features, and recommendations grounded in each learner’s quiz results.', tags: ['LLM evaluation', 'Prompt engineering', 'Responsible AI'] },
      { text: 'Made the platform 15 to 24% faster on mobile and fixed lessons failing to load on older iPhones.', tags: ['React'] },
    ],
  },
  {
    mono: 'D', color: 'var(--turquoise)', ink: 'var(--ink)',
    meta: '11/2024 – 01/2026 · Lausanne',
    title: 'Full-stack Developer at DemoSquare',
    uses: ['Claude Code', 'Cursor'],
    bullets: [
      { text: 'Led frontend delivery in TypeScript, partnering with product design to turn Figma specifications into a consistent experience for legal-tech customers.', tags: ['TypeScript', 'Figma'] },
      { text: 'Ran user research sessions and product testing cycles, turning friction points into prioritized product improvements.', tags: ['User research', 'Roadmapping'] },
      { text: 'Built a Sass component library and a Python pipeline for collecting legislative data at scale.', tags: ['Python'] },
    ],
  },
  {
    mono: 'A', color: 'var(--blue)', ink: 'var(--ink)',
    meta: '03/2024 – 08/2024 · Lausanne',
    title: 'Master thesis at AXA Group Operations',
    bullets: [
      { text: 'Shipped an LLM pipeline using open-source models to audit AI systems for fairness, ethics and regulatory compliance, making Responsible AI legible to non-technical stakeholders.', tags: ['LLM evaluation', 'Responsible AI', 'Python'] },
      { text: 'Built an LLM-as-a-Judge evaluation (GPT-4o) that set acceptance criteria for model outputs.', tags: ['LLM evaluation', 'Acceptance criteria', 'Prompt engineering'] },
    ],
  },
  {
    mono: 'K', color: 'var(--ink-2)', ink: '#FFFFFF',
    meta: '09/2023 – 02/2024 · Zurich',
    title: 'Software Developer Intern at KITRO',
    bullets: [
      { text: 'Shipped an issue-reporting tool to production, enabling daily labelling of thousands of images and reliable data collection on AWS S3.', tags: ['Python', 'AWS'] },
      { text: 'Delivered frontend (React, TypeScript) and backend (Python, PostgreSQL, AWS Lambda) features in agile sprints with product owners.', tags: ['React', 'TypeScript', 'Python', 'SQL', 'AWS'] },
    ],
  },
  {
    mono: 'P', color: 'var(--coral)', ink: 'var(--ink)',
    meta: '07/2023 – 09/2023 · Istanbul',
    title: 'IT Intern, Marketing Technology at P&G',
    bullets: [
      { text: 'Engineered SQL on BigQuery dashboards, improving data accuracy by 40% in Turkey and 4% across Europe for digital platform campaigns.', tags: ['SQL'] },
      { text: 'Shared cashback-campaign analysis and insights with business stakeholders to refine digital marketing strategy.', tags: [] },
    ],
  },
];

export const education: Role[] = [
  {
    mono: 'E', color: 'var(--accent)', ink: '#FFFFFF',
    meta: '2021 – 2024 · EPFL, Lausanne',
    title: 'MSc Computer Science, minor in Management of Technology & Entrepreneurship',
    bullets: [
      { text: 'Master thesis on Responsible AI evaluation with LLMs, at AXA.', tags: ['LLM evaluation', 'Responsible AI'] },
      { text: 'Minor in Management of Technology & Entrepreneurship.', tags: ['Roadmapping'] },
    ],
  },
  {
    mono: 'S', color: 'var(--turquoise)', ink: 'var(--ink)',
    meta: '2021 · Sabancı University, Istanbul',
    title: 'BSc Computer Science & Engineering and Mechatronics Engineering',
    bullets: [{ text: 'Double major in Computer Science & Engineering and Mechatronics Engineering.', tags: [] }],
  },
];

export const community = [
  { meta: '2025 – now · EPFL', title: 'EPFL Alumni Mentor', text: 'Guide EPFL students on communication, career planning and life.' },
  { meta: '2023 – 2025 · EPFL', title: 'Co-Vice President & Marketing Lead, LauzHack', text: 'Grew the digital presence of EPFL’s student hackathon by 185% across Discord, LinkedIn and Instagram.' },
];

export const languages = [
  { name: 'Turkish', level: 'Native' },
  { name: 'English', level: 'C2' },
  { name: 'French', level: 'B1' },
];
