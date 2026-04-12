import { SEO_CONFIG } from './config';

const { baseUrl } = SEO_CONFIG;

// Inline program data (replaces academics.json dependency)
const programs = [
  { id: 'plus2-science',      href: '/academics/plus2-science',      title: '+2 Science',      category: 'plus2',    affiliation: 'NEB', duration: '2 Years',  description: 'NEB-affiliated +2 Science program with Physics, Chemistry, Biology and Mathematics.' },
  { id: 'plus2-management',  href: '/academics/plus2-management',   title: '+2 Management',   category: 'plus2',    affiliation: 'NEB', duration: '2 Years',  description: 'NEB-affiliated +2 Management program covering Economics, Accountancy and Business Studies.' },
  { id: 'plus2-law',         href: '/academics/plus2-law',          title: '+2 Law',          category: 'plus2',    affiliation: 'NEB', duration: '2 Years',  description: 'NEB-affiliated +2 Law program providing foundation in constitutional and procedural law.' },
  { id: 'plus2-humanities',  href: '/academics/plus2-humanities',   title: '+2 Humanities',   category: 'plus2',    affiliation: 'NEB', duration: '2 Years',  description: 'NEB-affiliated +2 Humanities program covering Social Studies, English and optional subjects.' },
  { id: 'bbs',               href: '/academics/bbs',                title: 'BBS',             category: 'bachelor', affiliation: 'TU',  duration: '4 Years',  description: 'TU-affiliated Bachelor of Business Studies program.' },
  { id: 'bca',               href: '/academics/bca',                title: 'BCA',             category: 'bachelor', affiliation: 'TU',  duration: '4 Years',  description: 'TU-affiliated Bachelor of Computer Applications program.' },
  { id: 'ca',                href: '/academics/ca',                  title: 'CA',              category: 'bachelor', affiliation: 'ICAN', duration: '3 Years', description: 'Chartered Accountancy program affiliated with ICAN Nepal.' },
];

export const programLinks = programs.map(program => ({
  id: program.id,
  href: program.href,
  url: `${baseUrl}${program.href}`,
  title: `${program.title} Program`,
  linkText: `Learn more about ${program.title} program`,
  ariaLabel: `Learn more about ${program.title} program at Bridgewater International College`,
  description: program.description,
}));

export const navigationLinks = [
  {
    id: 'home',
    href: '/',
    url: baseUrl,
    title: 'Home',
    linkText: 'Go to Bridgewater International College homepage',
    ariaLabel: 'Navigate to Bridgewater International College homepage',
  },
  {
    id: 'about',
    href: '/about',
    url: `${baseUrl}/about`,
    title: 'About Us',
    linkText: 'Learn about Bridgewater International College',
    ariaLabel: 'Learn about Bridgewater International College history and mission',
  },
  {
    id: 'academics',
    href: '/academics',
    url: `${baseUrl}/academics`,
    title: 'Academic Programs',
    linkText: 'Explore our academic programs',
    ariaLabel: 'Explore academic programs at Bridgewater International College',
  },
  {
    id: 'admissions',
    href: '/admissions',
    url: `${baseUrl}/admissions`,
    title: 'Admissions',
    linkText: 'Apply for admission',
    ariaLabel: 'Apply for admission at Bridgewater International College',
  },
  {
    id: 'campus-life',
    href: '/campus-life',
    url: `${baseUrl}/campus-life`,
    title: 'Campus Life',
    linkText: 'Discover campus life at Bridgewater',
    ariaLabel: 'Discover campus life and facilities at Bridgewater International College',
  },
  {
    id: 'contact',
    href: '/contact',
    url: `${baseUrl}/contact`,
    title: 'Contact Us',
    linkText: 'Contact Bridgewater International College',
    ariaLabel: 'Contact Bridgewater International College for inquiries',
  },
];

export const facilityLinks = [
  {
    id: 'hostel',
    href: '/campus-life/hostel',
    url: `${baseUrl}/campus-life/hostel`,
    title: 'Hostel & Boarding',
    linkText: 'Learn more about hostel facilities',
    ariaLabel: 'Learn more about hostel and boarding facilities at Bridgewater',
  },
  {
    id: 'library',
    href: '/library',
    url: `${baseUrl}/library`,
    title: 'Library',
    linkText: 'Learn more about library resources',
    ariaLabel: 'Learn more about library resources at Bridgewater International College',
  },
  {
    id: 'cafeteria',
    href: '/campus-life/cafeteria',
    url: `${baseUrl}/campus-life/cafeteria`,
    title: 'Cafeteria',
    linkText: 'Learn more about cafeteria services',
    ariaLabel: 'Learn more about cafeteria services at Bridgewater International College',
  },
  {
    id: 'events',
    href: '/campus-life/events',
    url: `${baseUrl}/campus-life/events`,
    title: 'Events & Activities',
    linkText: 'Learn more about campus events',
    ariaLabel: 'Learn more about events and activities at Bridgewater International College',
  },
];

export function getProgramLink(programId: string) {
  return programLinks.find(link => link.id === programId);
}

export function getNavigationLink(linkId: string) {
  return navigationLinks.find(link => link.id === linkId);
}

export function getFacilityLink(facilityId: string) {
  return facilityLinks.find(link => link.id === facilityId);
}
