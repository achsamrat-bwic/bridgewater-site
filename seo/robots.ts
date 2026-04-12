import { MetadataRoute } from 'next';
import { SEO_CONFIG } from './config';

const { baseUrl } = SEO_CONFIG;

export const robotsConfig: MetadataRoute.Robots = {
  rules: [
    // 1. Explicitly Allow Major Search Engines
    {
      userAgent: ['Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider', 'YandexBot'],
      allow: '/',
      disallow: ['/api/', '/portal/', '/_next/static/', '/private/', '/*?r=*'],
    },
    // 2. Explicitly Allow Social Media Bots (Preview generation)
    {
      userAgent: ['facebookexternalhit', 'Twitterbot', 'LinkedInBot'],
      allow: '/',
    },
    // 3. Explicitly Allow ALL Major AI Crawlers, Training Scrapers & LLMs
    {
      userAgent: [
        'GPTBot',             // OpenAI / ChatGPT training
        'ChatGPT-User',       // ChatGPT real-time web browsing
        'OAI-SearchBot',      // OpenAI Search crawler
        'ClaudeBot',          // Anthropic / Claude
        'Anthropic-ai',       // Anthropic
        'Claude-Web',         // Anthropic web access
        'Google-Extended',    // Google Gemini / Vertex AI training
        'PerplexityBot',      // Perplexity AI search
        'Applebot-Extended',  // Apple Intelligence / Siri
        'Amazonbot',          // Amazon / Alexa AI
        'meta-externalagent', // Meta / Llama AI
        'FacebookBot',        // Meta crawlers
        'Bytespider',         // ByteDance / TikTok AI
        'Cohere-ai',          // Cohere
        'YouBot',             // You.com AI Search
        'CCBot',              // Common Crawl (Massive dataset used by most open source AIs)
        'Omgilibot',          // Various LLM data scraping
        'Omgili',
        'Diffbot'             // Knowledge graph AI
      ],
      allow: '/',
      disallow: ['/api/', '/portal/', '/_next/static/', '/private/', '/*?r=*'],
    },
    // 4. Catch-all for any other future bots
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/portal/', '/_next/static/', '/private/', '/*?r=*'],
    },
  ],
  sitemap: `${baseUrl}/sitemap.xml`,
  host: new URL(baseUrl).hostname,
};
