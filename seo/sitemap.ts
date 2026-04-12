import { MetadataRoute } from 'next';
import { SEO_CONFIG } from './config';

const { baseUrl, siteName } = SEO_CONFIG;

export function generateSitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const logoUrl = `${baseUrl}/logo.png`;
  
  // Inline program entries (replaces academics.json dependency)
  const programs = [
    { href: '/academics/plus2-science',      category: 'plus2' },
    { href: '/academics/plus2-management',   category: 'plus2' },
    { href: '/academics/plus2-law',          category: 'plus2' },
    { href: '/academics/plus2-humanities',   category: 'plus2' },
    { href: '/academics/bbs',                category: 'bachelor' },
    { href: '/academics/bca',                category: 'bachelor' },
    { href: '/academics/ca',                 category: 'bachelor' },
  ];

  const programEntries = programs.map(program => ({
    url: `${baseUrl}${program.href}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: program.category === 'plus2' ? 0.9 : 0.85,
    images: [logoUrl],
  }));
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/about/history`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/about/mission`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/about/leadership`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/academics`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
      images: [logoUrl],
    },
    ...programEntries,
    {
      url: `${baseUrl}/admissions`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/admissions/apply`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/admissions/requirements`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/admissions/scholarships`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/admissions/fees`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/admissions/faqs`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/campus-life`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/campus-life/hostel`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/campus-life/cafeteria`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/campus-life/library`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/campus-life/events`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/facilities`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/library`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/alumni`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/news`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
      images: [logoUrl],
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
      images: [logoUrl],
    },
  ];
}
