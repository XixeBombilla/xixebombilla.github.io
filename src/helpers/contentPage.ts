const contentAbout = [
  "I build <strong style='font-weight:600'>user experiences that feel effortless</strong> — intuitive, fast, and beautifully crafted. With <span style='background:#eef7c4;padding:1px 5px;border-radius:3px'>10+ years</span> in software, I specialize in <strong style='font-weight:600'>full-stack development</strong> with a strong focus on the front end.",
  "I've shipped high-traffic platforms and customer portals across <strong style='font-weight:600'>Fintech, E-commerce, Healthcare, and Energy</strong>, and I care deeply about <strong style='font-weight:600'>performance, accessibility, and mentoring</strong> — bridging the gap between design and engineering so the result is both polished and robust.",
  "When I'm not coding: new tools, video games, family — and perfecting my coffee ritual. I take coffee seriously.",
];

const contentAccordions = [
  {
    title: "Staff Frontend Engineer @ Renew Home",
    date: "Apr 2025 — Present",
    subtitle: "Full-time · California · Remote",
    content: `Working on the front-end development in <span class="font-bold">Remix, TypeScript, and modern JavaScript</span> — building accessible, high-performance UI for <span class="font-bold">energy management platforms</span> at scale.`,
    badges: ["React.js", "Remix", "TypeScript", "JavaScript (ES6+)", "Front-end"],
  },
  {
    title: "Sr. Engineering Manager @ SmartBiz Loans",
    date: "Sep 2021 - Jan 2025",
    content: `Built scalable systems that improved platform reliability by <span class="font-bold">15%</span>. Introduced <span class="font-bold">Agile processes</span> that reduced delivery timelines by 30%. I lead with <span class="font-bold">empathy</span>, connecting with people to inspire and support by example — fostering a <span class="font-bold">culture of trust and mentorship.</span>`,
    badges: ["High-Performance Teams", "Scope Planning", "Mentorship", "Agile", "Empathy", "Collaboration", "Growth"],
  },
  {
    title: "Staff Software Engineer @ SmartBiz Loans",
    date: "Jan 2019 - Sep 2021",
    content: `
      I worked on <span class="font-bold">designing and implementing</span> high-quality client applications, <span class="font-bold">collaborating</span> across teams to ensure we delivered <span class="font-bold">seamless</span> user experiences. As tech lead, I <span class="font-bold">mentored</span> junior developers and led the creation of a unified <span class="font-bold">design system</span> to ensure <span class="font-bold">consistency</span> across the product.
    `,
    badges: [
      "HTML & CSS",
      "Javascript",
      "React",
      "Styled Components",
      "Apollo",
      "TypeScript",
      "GraphQL",
      "Jest",
      "Cypress",
      "Ruby on Rails",
      "REST API",
      "Redis",
      "Docker",
      "Git",
    ],
  },
  {
    title: "Front-End Engineer @ SmartBiz Loans",
    date: "Jul 2015 - Jan 2019",
    content: `
      I played a key role in <span class="font-bold">maintaining and optimizing</span> our monolithic project while <span class="font-bold">modernizing legacy systems.</span> I worked on major projects like the <span class="font-bold">marketing site and the partner portal</span>, and I proposed the <span class="font-bold">adoption</span> of React, which became the official frontend framework for the company.
    `,
    badges: [
      "HTML & CSS",
      "Javascript",
      "React",
      "Relay",
      "Mobx",
      "GraphQL",
      "Jest",
      "Cypress",
      "Ruby on Rails",
      "REST API",
      "Redis",
      "Docker",
      "Git",
    ],
  },
  {
    title: "UI/UX Frontend Lead @ Nebula Ideas",
    subtitle: "Co-Founder",
    date: "Jul 2010 - Jan 2016",
    content: `
      I worked closely with <span class="font-bold">multiple small businesses</span> to <span class="font-bold">design and develop customized applications</span> tailored to their unique needs. From <span class="font-bold">healthcare to e-commerce and retail</span>, I helped businesses <span class="font-bold">modernize their digital presence and create seamless interactions</span> for their customers.
    `,
    badges: [
      "HTML & CSS",
      "Javascript",
      "Jest",
      "Ruby on Rails",
      "REST API",
      "Redis",
      "Git",
      "Heroku",
    ],
  },
];

const contentFooter: {
  key: "github" | "linkedin" | "medium";
  link: string;
  label?: string;
}[] = [
  {
    key: "github",
    link: "https://github.com/xixebombilla",
    label: "Go to Github",
  },
  {
    key: "linkedin",
    link: "https://www.linkedin.com/in/gizebonilla/",
    label: "Go to Linkedin",
  },
  {
    key: "medium",
    link: "https://medium.com/@gize.bonilla",
    label: "Go to Medium",
  },
];

const badgeGroups = [
  {
    title: "Values",
    badges: [
      { title: "Empathy" },
      { title: "Team Work" },
      { title: "Work-Life Balance" },
      { title: "Excellence" },
    ],
  },
  {
    title: "Hobbies",
    badges: [
      { title: "Family" },
      { title: "Coffee" },
      { title: "Video Games" },
      { title: "New Technologies" },
      { title: "Camping" },
    ],
  },
  {
    title: "Currently Exploring",
    badges: [
      { title: "AI" },
      { title: "Remix", link: "https://remix.run/" },
      { title: "Expo", link: "https://expo.dev/" },
      { title: "Python" },
      { title: "Claude", link: "https://claude.ai" },
      { title: "Agentic Workflows" },
    ],
  },
];

const contentProjects = [
  {
    title: "Kapell Labs",
    description: "An agentic workflow that helps you create beautiful digital products.",
    image: "kapell.webp",
    status: "In Progress",
    tint: "#141414",
    badges: ["Claude", "AI"],
  },
  {
    title: "Dissolve",
    description: "Dissolve is an app that guides a Subject from wakefulness into sleep through a repeated, rhythm-based sensory interaction.",
    image: "dissolve.webp",
    status: "In Progress",
    tint: "#080a0b",
    badges: ["Expo", "React Native", "TypeScript"],
  },
  {
    title: "The Hue Creatures Club",
    description: "A metaverse and unique NFT creatures community.",
    image: "hue.webp",
    status: "In Progress",
    tint: "#7fb5a8",
    badges: ["Web3", "React", "TypeScript", "Express", "Colyseus"],

  },
  {
    title: "A11yEclipse",
    description: "A sleek and accessible dark theme for VSCode.",
    image: "a11y.webp",
    status: "Published",
    tint: "#f3c13a",
    badges: ["Yeoman", "VSCode"],
    link: "https://marketplace.visualstudio.com/items?itemName=GizeBonilla.a11yeclipse",
  },
  {
    title: "AutoJSDoc CLI",
    description: "CLI tool to automatically generate JSDoc comments.",
    image: "autojsdoc.webp",
    status: "Published",
    tint: "#5566e8",
    badges: ["NPM", "JS"],
    link: "https://www.npmjs.com/package/autojsdoc",
  },
];

const contentPlaces = [
  {
    label: "La Previa, JSConf Chile",
    kind: "Talk",
    href: "https://www.youtube.com/watch?v=FU1zzOjF05s",
  },
  {
    label: "Oh, That's Why.",
    kind: "Podcast",
    href: "https://podcasts.apple.com/us/podcast/oh-thats-why/id1887141712",
  },
];

export {
  contentAbout,
  contentFooter,
  badgeGroups,
  contentAccordions,
  contentProjects,
  contentPlaces,
};
