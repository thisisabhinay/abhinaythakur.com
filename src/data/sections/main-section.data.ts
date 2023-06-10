import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Abhinay Thakur',
  role: 'Senior Frontend Engineer',
  details: [
    { label: 'Phone', value: '+91 9650548957', url: 'tel:+919650548957' },
    { label: 'Email', value: 'sayhello@abhinaythakur.com', url: 'mailto:sayhello@abhinaythakur.com' },
    { label: 'From', value: 'Bengaluru, India' },
    { label: 'Experience', value: '7+ Years' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+91 9650548957' },
    { label: 'Email', value: 'sayhello@abhinaythakur.com' },
    { label: 'LinkedIn', value: '/in/thisisabhinay', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/thisisabhinay', url: 'https://github.com' },
    { label: 'Website', value: 'abhinaythakur.com', url: '/', fullRow: true },
  ],
  description:
    'As a UX/UI and Frontend Engineer, I operate at the nexus of design and technology, showcasing expertise across the domains of digital product design and software engineering. My cross-functional experience, comprehensive understanding of lean product development, mastery of frontend technologies, and in-depth knowledge of design empower me to facilitate robust communication and collaboration between design and technical teams within an organization.',
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Abhinay_Thakur.pdf',
  },
  links: [facebook({ url: '#' }), github({ url: '#' }), linkedin({ url: '#' }), twitter({ url: '#' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
