import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  astro,
  aws,
  cypress,
  firebase,
  gcp,
  javascript,
  jest,
  mongoDb,
  nestJs,
  react,
  responsiveHtml,
  restfulServices,
  sass,
  supabase,
  tailwindCss,
  typescript,
  vue,
  webAccessibility,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        responsiveHtml({
          level: 5,
          description:
            'Skilled in employing advanced techniques to create flawlessly responsive websites and applications.',
        }),

        vue({
          level: 4,
          description:
            'Skilled in leveraging Vue.js and its comprehensive ecosystem to deliver scalable and modular applications.',
        }),

        react({
          level: 4,
          description:
            'Experienced in architecting dynamic and highly interactive user interfaces using the renowned React library.',
        }),

        javascript({
          level: 4,
          description:
            'Proficient in employing JavaScript with mastery in ES6+ syntax, DOM manipulation, and asynchronous programming.',
        }),

        sass({
          level: 4,
          description:
            'Proficiently skilled at a level of 4, harnessing the full power of SASS (Syntactically Awesome Style Sheets) to compose maintainable and reusable CSS codebases.',
        }),

        restfulServices({
          level: 4,
          description:
            'Experienced in architecting, implementing, and integrating RESTful services and APIs for seamless client-server communication.',
        }),

        typescript({
          level: 3,
          description:
            'Proficient in leveraging TypeScript to enhance JavaScript projects with static typing and improved code organization.',
        }),

        tailwindCss({
          level: 3,
          description:
            'Adept at utilizing the Tailwind CSS framework to rapidly prototype visually compelling web interfaces.',
        }),

        webAccessibility({
          level: 3,
          description:
            'Knowledgeable in applying web accessibility standards (WCAG) to ensure inclusivity and deliver accessible web solutions.',
        }),

        jest({
          level: 3,
          description:
            'Experienced in working with MongoDB, a popular NoSQL database, for efficient data storage and retrieval in various projects.',
        }),

        cypress({
          level: 3,
          description:
            'Experienced in working with MongoDB, a popular NoSQL database, for efficient data storage and retrieval in various projects.',
        }),

        mongoDb({
          level: 3,
          description:
            'Experienced in working with MongoDB, a popular NoSQL database, for efficient data storage and retrieval in various projects.',
        }),

        firebase({
          level: 3,
          description:
            'Skilled in utilizing Firebase, for rapidly developing and deploying web applications with features like authentication and real-time database functionality.',
        }),

        nestJs({
          level: 2,
          description:
            'Adept in utilizing Nest.js, a powerful Node.js framework, to develop scalable and modular applications with a focus on code structure and maintainability.',
        }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [nestJs(), aws(), supabase(), astro(), gcp(), cypress()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:in', name: 'Hindi - Native' },
        { icon: 'circle-flags:uk', name: 'English - Fluent' },
        { icon: 'circle-flags:es', name: 'Spanish - A1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
