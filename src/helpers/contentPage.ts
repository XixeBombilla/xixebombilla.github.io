const contentAbout = [
  "I love <span class='font-bold'>building user experiences</span> that feel <span class='font-bold'>effortless—intuitive, fast, and beautifully crafted.</span> With <span class='font-bold'>over 10 years in software development</span>, I specialize in <span class='font-bold'>full-stack development</span> with a <span class='font-bold'>strong focus on front-end technologies.</span> I care deeply about <span class='font-bold'>performance, accessibility, and creating UIs</span> that look great — <span class='font-bold'>and just works.</span>",
  "Throughout my career, I've worked across <span class='font-bold'>Fintech, E-commerce, and Healthcare</span>—developing <span class='font-bold'>high-traffic platforms, customer portals, and scalable web applications.</span> I enjoy <span class='font-bold'>collaborating with cross-functional teams</span> to <span class='font-bold'>bridge the gap between design and engineering</span> — ensuring that the final product is both <span class='font-bold'>visually polished and technically robust.</span>",
  "I'm always looking for ways to <span class='font-bold'>improve development processes</span> — whether it's <span class='font-bold'>optimizing system performance, refining front-end architecture, or mentoring engineers.</span> I believe great software isn't just about <span class='font-bold'>writing clean code</span> — it's about <span class='font-bold'>building something impactful that users love.</span>",
  "When I'm not coding, I'm usually <span class='font-bold'>exploring new technologies or tools, playing video games, enjoying time with my family or perfecting my coffee ritual for the perfect start to my day</span> — I take coffee seriously.",
];

const contentAccordions = [
  {
    title: "Sr. Engineering Manager @ SmartBiz Loans",
    date: "Sep 2021 - Jan 2025",
    content: `
      I lead with <span class="font-bold">empathy</span>, connecting with people to inspire and support by example. I enjoy creating smooth <span class="font-bold">Agile processes</span> that build confidence and <span class="font-bold">efficiency</span> while fostering a <span class="font-bold">culture of trust.</span> <span class="font-bold">Mentoring</span> is a passion of mine—I love helping engineers <span class="font-bold">grow, level up,</span> and take the next step in their careers. I also thrive in cross-functional environments, empowering <span class="font-bold">collaboration</span> across teams to drive impactful results.
    `,
    badges: ["Empathy", "Collaboration", "Mentorship", "Growth"],
  },
  {
    title: "Staff Software Engineer @ SmartBiz Loans",
    date: "Jan 2019 - Sep 2021",
    content: `
      I worked on <span class="font-bold">designing and implementing</span> high-quality client applications, <span class="font-bold">collaborating</span> across teams to ensure we delivered <span class="font-bold">seamless</span> user experiences. We embraced <span class="font-bold">modern technologies,</span> maintained high standards of <span class="font-bold">code quality</span>, and followed <span class="font-bold">Agile practices</span> to stay efficient. As a tech lead, I <span class="font-bold">mentored</span> junior developers, guided the development of multiple features, and led the creation of a unified <span class="font-bold">design system</span> to ensure <span class="font-bold">consistency</span> across the product.
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
      "Sidekiq",
      "Docker",
      "Git",
    ],
  },
  {
    title: "Front-End Engineer @ SmartBiz Loans",
    date: "Jul 2015 - Jan 2019",
    content: `
      I played a key role in <span class="font-bold">maintaining and optimizing</span> our monolithic project while <span class="font-bold">modernizing legacy systems.</span> I worked on major projects like the <span class="font-bold"> marketing site and the partner portal, </span> and I proposed the <span class="font-bold">adoption</span> of React, which became the official frontend framework for the company.
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
      "Sidekiq",
      "Docker",
      "Git",
    ],
  },
];

const contentFooter: {
  key: "github" | "linkedin" | "instagram" | "x";
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
    key: "instagram",
    link: "https://www.instagram.com/xixebombilla/",
    label: "Go to Instagram",
  },

  { key: "x", link: "https://x.com/gizebonillam", label: "Go to X" },
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
    ],
  },
  {
    title: "Currently Exploring",
    badges: [
      { title: "Web3" },
      { title: "Bun" },
      { title: "Colyseus", link: "https://colyseus.io/framework/" },
      { title: "AI" },
    ],
  },
];

export { contentAbout, contentFooter, badgeGroups, contentAccordions };
