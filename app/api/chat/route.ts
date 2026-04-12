// v1.2 - Added Formatting Guidelines & Fixed missing JSON
import { NextRequest, NextResponse } from 'next/server';
import config from '@/config.json';

const testimonialsData = {
  testimonials: [
    {
      name: "Pritila Gautam",
      course: "+2 Management-CSMath",
      image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/whatourstudentsay/pritila.jpeg",
      quote: "The faculty here truly cares about each student's success. The smart classrooms and hands-on lab sessions prepared me perfectly for my engineering entrance exams."
    },
    {
      name: "Rahul Adhikari",
      course: "BCA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "Bridgewater gave me the technical skills and confidence I needed. The computer labs are world-class, and the internship opportunities opened doors to my dream career."
    },
    {
      name: "Anisha Thapa",
      course: "BBS",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The business program here is exceptional. From case studies to real-world projects, every aspect of my education has been practical and industry-relevant."
    }
  ]
};

const SYSTEM_PROMPT = `You are BWIC Assistant, the official highly-advanced AI assistant for Bridgewater International College (BWIC) in Sinamangal, Kathmandu.
Your goal is to be the ultimate guide for prospective and current students, providing detailed information and suggesting the next steps via action buttons.

### FORMATTING GUIDELINES:
- **Bold Text**: Use double asterisks '**bold**' for emphasis on key terms.
- **Headings**: Use '#' for main titles and '##' for sections.
- **Lists**: Use '-' or '*' for bulleted lists to make information readable.
- **Links**: Use '[Text](/url)' for inline links to internal pages.
- **CONCISENESS**: You MUST keep your total response under 400 words. This is CRITICAL to ensure the final [ACTIONS] block is always fully visible and never cut off.

### COLLEGE CORE INFORMATION:
- Name: Bridgewater International College (BWIC)
- Established: 2010
- Affiliations: NEB (National Examinations Board) for +2, Tribhuvan University (TU) for Bachelors.
- Address: Sinamangal, Kathmandu, Nepal (Near the airport)
- Contact: +977-9802344649, 01-4581590
- Email: info@bridgewater.edu.np

### NAVIGATION & URL STRUCTURE (Suggest these in buttons):
1. **Home**: /
2. **Academics / Programs**: /academics
   - +2 Science: /academics/plus2-science
   - +2 Management: /academics/plus2-management
   - +2 Humanities: /academics/plus2-humanities
   - +2 Law: /academics/plus2-law
   - BCA (Computer Application): /academics/bca
   - BBS (Business Studies): /academics/bbs
   - CA (Chartered Accountancy): /academics/ca
3. **Admissions**: /admissions
   - ONLINE APPLICATION FORM: /admissions/apply (VERY IMPORTANT)
   - Requirements: /admissions/requirements
   - Scholarships: /admissions/scholarships
   - Fee Structure: /admissions/fees
4. **Campus Life**: /campus-life
   - Hostel & Boarding: /campus-life/hostel (Newly redesigned premium facility)
   - Cafeteria: /campus-life/cafeteria
   - Library: /campus-life/library
5. **About**: /about
   - Leadership: /about/leadership
   - History: /about/history
6. **Contact**: /contact

### KEY FEATURES TO HIGHLIGHT:
- **Hostel**: Separate premium hostels for boys and girls in Sinamangal. 24/7 security, organic food, and academic monitoring.
- **Smart Classrooms**: Technology-integrated learning environment.
- **Location**: Prime location at Sinamangal, easily accessible.
- **Success Rate**: High success rate in NEB and TU examinations.

### INTERACTION GUIDELINES:
1. Provide rich, detailed descriptions. For example, if asked about Law, mention moot courts and workshops.
2. If the user is interested in joining, ALWAYS suggest the "Apply Now" button (/admissions/apply).
3. If they ask about living arrangements, suggest/redirect to the Hostel page.
4. Be professional, warm, and encouraging.

### ACTION BUTTONS REQUIREMENT:
You MUST conclude every message with a JSON block for actions.
Format: [ACTIONS]{"actions": [{"label": "Text", "url": "/path", "type": "primary|secondary"}]}[/ACTIONS]
- Use 'primary' (Gold) for Apply Now, Explore Programs.
- Use 'secondary' for Learn More, Contact Us, Gallery.

Example: If a user asks about BCA, explain the 4-year TU program and suggest:
[ACTIONS]{"actions": [{"label": "Apply Now", "url": "/admissions/apply", "type": "primary"}, {"label": "BCA Details", "url": "/academics/bca", "type": "secondary"}]}[/ACTIONS]`;

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const chatHistory = Array.isArray(history) ? history : [];
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...chatHistory.map((msg: { text: string; isUser: boolean }) => ({
        role: msg.isUser ? 'user' : 'assistant',
        content: msg.text
      })),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.mistral.apiKey}`
      },
      body: JSON.stringify({
        model: config.mistral.model,
        messages: messages,
        max_tokens: 800,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Mistral API error:', errorData);
      return NextResponse.json(
        { error: 'AI service temporarily unavailable' },
        { status: 500 }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || "I'm sorry, Currently our all servers are down.";

    let cleanResponse = aiResponse;
    let actions: Array<{ label: string; url: string; type: string }> = [];
    // Aggregate images from site JSON files and config, produce absolute URLs for previews
    const siteBase = (config.college?.website || '').replace(/\/$/, '');

    const imagesFromTestimonials = (testimonialsData?.testimonials || []).map((t: any, idx: number) => ({
      id: 3000 + idx,
      url: t.image || '',
      title: t.name || '',
      category: (t.course || 'testimonials').toLowerCase()
    })).filter((i: any) => i.url);

    const imagesFromConfig: any[] = [];
    if (config.images) {
      const imgs: string[] = [];
      if (config.images.hero?.background) imgs.push(config.images.hero.background);
      if (config.images.logo?.src) imgs.push(config.images.logo.src);
      if (config.images.about?.collegeBuilding) imgs.push(config.images.about.collegeBuilding);
      if (config.images.icons?.ogImage) imgs.push(config.images.icons.ogImage);
      imgs.forEach((p, idx) => {
        if (p) imagesFromConfig.push({ id: 4000 + idx, url: p, title: 'site-image', category: 'site' });
      });
    }

    // Combine and normalize URLs to absolute (use siteBase for relative paths)
    const combined = [...imagesFromTestimonials, ...imagesFromConfig];
    const siteImages: Array<{ id: number; url: string; title: string; category: string }> = Array.from(new Map(combined.map((it: any) => {
      const raw = it.url || '';
      const abs = raw.startsWith('http') ? raw : (raw.startsWith('/') ? siteBase + raw : siteBase + '/' + raw.replace(/^\.\//, ''));
      return [abs, { id: it.id, url: abs, title: it.title, category: (it.category || '').toLowerCase() }];
    })).values());

    const actionsMatch = aiResponse.match(/\[ACTIONS\]([\s\S]*?)\[\/ACTIONS\]/);
    if (actionsMatch) {
      cleanResponse = aiResponse.replace(/\[ACTIONS\][\s\S]*?\[\/ACTIONS\]/, '').trim();
      try {
        const actionsData = JSON.parse(actionsMatch[1]);
        actions = actionsData.actions || [];
      } catch (e) {
        console.error('Failed to parse actions:', e);
      }
    }

    if (actions.length === 0) {
      const lowerMsg = message.toLowerCase();
      if (lowerMsg.includes('apply') || lowerMsg.includes('admission') || lowerMsg.includes('enroll')) {
        actions = [
          { label: 'Apply Now', url: '/admissions/apply', type: 'primary' },
          { label: 'View Requirements', url: '/admissions', type: 'secondary' }
        ];
      } else if (lowerMsg.includes('program') || lowerMsg.includes('course') || lowerMsg.includes('study')) {
        actions = [
          { label: 'Explore Programs', url: '/academics', type: 'primary' },
          { label: 'Apply Now', url: '/admissions/apply', type: 'secondary' }
        ];
      } else if (lowerMsg.includes('fee') || lowerMsg.includes('cost') || lowerMsg.includes('price')) {
        actions = [
          { label: 'Contact for Fees', url: '/contact', type: 'primary' },
          { label: 'Apply Now', url: '/admissions/apply', type: 'secondary' }
        ];
      } else if (lowerMsg.includes('scholarship') || lowerMsg.includes('financial')) {
        actions = [
          { label: 'Apply for Scholarship', url: '/admissions/apply', type: 'primary' },
          { label: 'Contact Us', url: '/contact', type: 'secondary' }
        ];
      } else if (lowerMsg.includes('contact') || lowerMsg.includes('call') || lowerMsg.includes('visit')) {
        actions = [
          { label: 'Contact Us', url: '/contact', type: 'primary' },
          { label: 'Get Directions', url: '/contact', type: 'secondary' }
        ];
      } else {
        actions = [
          { label: 'Explore Programs', url: '/academics', type: 'primary' },
          { label: 'Contact Us', url: '/contact', type: 'secondary' }
        ];
      }
    }

    // If user asked for images/gallery, include relevant images from site
    const wantsImages = /image|images|photo|photos|gallery|picture|pictures|show me|see (photos|images)/i.test(message);
    let imagesToReturn: Array<{ id: number; url: string; title: string; category: string }> = [];
    if (wantsImages) {
      // Try to detect a category word in the message to filter images
      const categoryMatch = siteImages
        .map(i => i.category)
        .find(cat => cat && message.toLowerCase().includes(cat));

      imagesToReturn = categoryMatch
        ? siteImages.filter(i => i.category === categoryMatch).slice(0, 12)
        : siteImages.slice(0, 12);
    }

    return NextResponse.json({
      response: cleanResponse,
      actions: actions,
      images: imagesToReturn
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
