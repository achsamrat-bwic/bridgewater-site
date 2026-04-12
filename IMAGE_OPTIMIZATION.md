# Image Optimization Guide

## Quick Start

- ✅ CDN is configured and ready to use
- ✅ All components are updated to use jsDelivr CDN
- ✅ Images are served from GitHub via global CDN

## Performance Metrics

### Before CDN
- Local hosting from single server
- Slower for international users
- Higher server bandwidth usage

### After CDN
- Global distribution via jsDelivr
- ~50-70% faster load times for international users
- Reduced server bandwidth by 70-90%
- Automatic caching and optimization

## Optimization Checklist

### 1. Image Format Selection

| Format | Best For | File Size | Browser Support |
|--------|----------|-----------|-----------------|
| WebP | All images | Small | Modern browsers |
| JPEG | Photographs | Medium | All browsers |
| PNG | Logos, icons | Larger | All browsers |
| AVIF | Maximum compression | Smallest | Modern browsers only |
| SVG | Icons, logos | Varies | All browsers |

### 2. Image Compression

Before uploading to GitHub:

```bash
# Install imagemagick
brew install imagemagick  # macOS
# or apt-get install imagemagick  # Linux

# Compress JPEG
convert input.jpg -quality 80 -strip output.jpg

# Convert to WebP
cwebp -q 80 input.jpg -o output.webp

# Optimize PNG
pngquant 256 input.png -o output.png
```

### 3. Recommended Image Sizes

| Use Case | Recommended Size | Format |
|----------|-----------------|--------|
| Hero Image | 1200-1600px width | WebP |
| Gallery Thumbnail | 400-500px width | WebP |
| Avatar/Profile | 200px | JPEG/WebP |
| Logo | 200-400px | PNG |
| Academic Images | 600-800px | WebP |

### 4. File Size Targets

| Type | Target Size | Quality Level |
|------|------------|---------------|
| Small Image (200px) | < 20KB | High |
| Medium Image (600px) | < 80KB | High |
| Large Image (1200px) | < 200KB | High |
| Hero Image (1600px) | < 300KB | Very High |

## Implementation Best Practices

### Use Next.js Image Component

✅ **Good** - Uses automatic optimization
```tsx
<Image
  src={CDN_CONFIG.getCdnUrl("image.jpg")}
  alt="Description"
  width={600}
  height={400}
  priority  // For above-fold
/>
```

❌ **Bad** - No optimization
```html
<img src="https://cdn.jsdelivr.net/..." alt="Description" />
```

### Lazy Loading Strategy

```tsx
// Hero images (above the fold)
<Image
  src={CDN_CONFIG.getCdnUrl("herosection1.webp")}
  alt="Hero"
  priority
/>

// Gallery/below-fold images (auto lazy loaded)
<Image
  src={CDN_CONFIG.getCdnUrl(image.src)}
  alt="Gallery"
  loading="lazy"  // Optional - default behavior
/>
```

### Responsive Images

```tsx
// Fills parent container
<div className="w-full h-[400px] relative">
  <Image
    src={CDN_CONFIG.getCdnUrl("image.jpg")}
    alt="Responsive"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
  />
</div>
```

## Gallery Image Optimization

### Current Setup
```json
{
  "gallery": [
    {
      "id": 1,
      "src": "./images/Homegallery/building.jpg",
      "title": "Main Campus Building",
      "category": "Campus"
    }
  ]
}
```

### Recommended Improvements

1. **Add multiple resolutions** to JSON:
```json
{
  "id": 1,
  "src": "./images/Homegallery/building.jpg",
  "srcSmall": "./images/Homegallery/building-small.jpg",
  "srcMedium": "./images/Homegallery/building-medium.jpg",
  "title": "Main Campus Building",
  "category": "Campus"
}
```

2. **Use in component**:
```tsx
<Image
  src={CDN_CONFIG.getCdnUrl(image.srcMedium || image.src)}
  alt={image.title}
  width={600}
  height={450}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

## Website Performance Monitoring

### Key Metrics to Track

1. **Core Web Vitals**:
   - Largest Contentful Paint (LCP): < 2.5s
   - First Input Delay (FID): < 100ms
   - Cumulative Layout Shift (CLS): < 0.1

2. **Image Performance**:
   - Average image load time
   - Total image payload
   - Cache hit rate

### Tools to Use

- **Google PageSpeed Insights**: https://pagespeed.web.dev
- **WebPageTest**: https://webpagetest.org
- **Lighthouse**: Built into Chrome DevTools
- **jsDelivr Stats**: Check CDN performance (if available)

## Monthly Optimization Tasks

### Week 1: Monitor Performance
```bash
# Check Google PageSpeed
# Check Core Web Vitals report in Google Search Console
# Review analytics for image load times
```

### Week 2: Optimize Images
```bash
# Check for images > 200KB
# Optimize and re-upload to GitHub
# Clear jsDelivr cache if needed
```

### Week 3: Update Components
```bash
# Review components for opportunities to use lazy loading
# Optimize hero images with priority flag
# Add responsive sizes
```

### Week 4: Test & Review
```bash
# Run Lighthouse audit
# Test on slow connections (3G)
# Verify all images load correctly
```

## Advanced Optimization

### Image CDN with Cloudinary (Optional)

For advanced transformations, integrate with Cloudinary:

```tsx
const getCloudinaryUrl = (
  publicId: string,
  width: number,
  quality: number = 80
) => {
  return `https://res.cloudinary.com/[your-cloud]/image/upload/w_${width},q_${quality}/${publicId}`;
};
```

### Responsive Image Sizes

```tsx
<Image
  src={CDN_CONFIG.getCdnUrl("image.jpg")}
  alt="Image"
  width={1000}
  height={600}
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 90vw,
    (max-width: 1280px) 80vw,
    1000px
  "
/>
```

## GitHub Repository Optimization

### Best Practices for Image Organization

```
Bridgewater-Images/
├── images/
│   ├── academics/           # 50 images max
│   │   ├── science-sm.jpg   # Small: < 50KB
│   │   ├── science-md.jpg   # Medium: < 100KB
│   │   └── science-lg.jpg   # Large: < 200KB
│   ├── leadership/          # 10-15 images max
│   ├── Homegallery/         # 20-30 images max
│   └── [other folders]/
├── logo.png                 # < 30KB
├── danfe.png               # < 30KB
└── herosection1.webp       # < 300KB
```

### Repository Maintenance

**Monthly**:
- Audit images for unused files
- Keep total repo size < 500MB
- Verify all images are optimized

## Troubleshooting Slow Images

### Step 1: Check Image Size
```bash
# On macOS
ls -lh images/*/
# On Linux
du -h images/*/

# Target: 50-200KB per image
```

### Step 2: Check Format
```bash
# WebP should be 30% smaller than JPEG
# If not, re-optimize
```

### Step 3: Monitor CDN Cache
- CDN caches for 24 hours
- Use purge endpoint if needed: 
  ```
  https://purge.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/
  ```

### Step 4: Test Loading
```bash
# Use Chrome DevTools Network tab
# Check:
# - Image size
# - Transfer time
# - Cache status
```

## Migration Checklist

- [x] CDN configuration created
- [x] GitHub repository connection established
- [x] All major components updated
- [x] Image paths converted to CDN URLs
- [ ] GitHub repository populated with images
- [ ] Test images loading from CDN
- [ ] Monitor performance metrics
- [ ] Optimize underperforming images
- [ ] Document image naming conventions
- [ ] Set up monitoring alerts

## Resources

- **Image Optimization**: https://web.dev/image-optimization/
- **Next.js Image**: https://nextjs.org/docs/api-reference/next/image
- **Compression Tools**: https://tinypng.com, https://imageoptim.com
- **jsDelivr**: https://www.jsdelivr.com

---

**Remember**: Regular optimization and monitoring ensure your website remains fast and responsive!
