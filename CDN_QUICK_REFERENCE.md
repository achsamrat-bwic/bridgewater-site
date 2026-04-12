# CDN Quick Reference

## Configuration File Location
- **File**: `lib/cdn-config.ts`
- **Import**: `import { CDN_CONFIG } from "@/lib/cdn-config";`

## Common Usage

### Basic Image
```tsx
<Image
  src={CDN_CONFIG.getCdnUrl("logo.png")}
  alt="Logo"
  width={48}
  height={48}
/>
```

### Gallery Images
```tsx
<Image
  src={CDN_CONFIG.getCdnUrl(item.src.replace("./images", "images"))}
  alt={item.title}
  width={600}
  height={400}
/>
```

### Academic/Program Images
```tsx
<Image
  src={CDN_CONFIG.getCdnUrl(heroImage.replace(/^\/images/, "images"))}
  alt={title}
  width={600}
  height={400}
/>
```

### Hero Images (with priority)
```tsx
<Image
  src={CDN_CONFIG.getCdnUrl("herosection1.webp")}
  alt="Hero"
  fill
  priority
  className="object-cover"
/>
```

## Path Conversion

| Old Path | New Path |
|----------|----------|
| `/logo.png` | `"logo.png"` |
| `/herosection1.webp` | `"herosection1.webp"` |
| `/library.jpeg` | `"library.jpeg"` |
| `/images/academics/science.jpg` | `"images/academics/science.jpg"` |
| `/images/leadership/ca.jpeg` | `"images/leadership/ca.jpeg"` |
| `./images/Homegallery/building.jpg` | `"images/Homegallery/building.jpg"` |

## Updated Components

✅ MainNavBar.tsx  
✅ HeroSection.tsx  
✅ GalleryCarousel.tsx  
✅ Gallery Page  
✅ Library Page  
✅ ProgramPage.tsx  
✅ TestimonialsSection.tsx  
✅ LeadershipSection.tsx  
✅ Footer.tsx  

## jsDelivr URL Examples

```
https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/logo.png
https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/herosection1.webp
https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/images/academics/science.jpg
https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/images/leadership/ca.jpeg
```

## Performance Impact

- **Load Time**: 50-70% faster for international users
- **Bandwidth**: 70-90% reduction in server bandwidth
- **Geographic**: Served from nearest CDN edge location
- **Caching**: 24-hour cache lifecycle

## GitHub Repository

- **URL**: https://github.com/achsamrat-bwic/Bridgewater-Images
- **Must be**: Public repository
- **Branch**: main (default)
- **Size**: Keep < 500MB

## CDN_CONFIG Methods

```typescript
// Get CDN URL
CDN_CONFIG.getCdnUrl(path: string): string

// Get optimized URL (future enhancement)
CDN_CONFIG.getOptimizedUrl(imagePath: string, width?: number): string

// Get lazy load URL (future enhancement)
CDN_CONFIG.getLazyLoadUrl(imagePath: string): string

// Transform multiple URLs
transformImageUrls(urls: string[]): string[]

// Debug logging
debugCdnUrl(imagePath: string): void
```

## Common Patterns

### Handle Both Local and External URLs
```tsx
// For testimonial avatars from Unsplash
src={testimonial.image.startsWith("http") 
  ? testimonial.image 
  : CDN_CONFIG.getCdnUrl(testimonial.image.replace(/^\/images/, "images"))}
```

### Remove Leading Slashes/Dots
```tsx
// Remove "./" or "/"
image.src.replace(/^\.\//, '').replace(/^\//, '')
// Result: "images/path/file.jpg"

// Then use with CDN
CDN_CONFIG.getCdnUrl(cleanPath)
```

### Replace Path Prefixes
```tsx
// Replace "./images" with "images"
path.replace("./images", "images")

// Replace "/images" prefix (keep "images" folder)
path.replace(/^\/images/, "images")
```

## Testing

### In Browser Console
```javascript
// Check if CDN URL is working
fetch('https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/logo.png')
  .then(res => console.log('Status:', res.status))
  .catch(err => console.error('Failed:', err))
```

### Check Image Loading
```tsx
<Image
  src={CDN_CONFIG.getCdnUrl("logo.png")}
  alt="Test"
  onLoad={() => console.log("Image loaded!")}
  onError={(e) => console.error("Image failed:", e)}
  width={100}
  height={100}
/>
```

## Adding New Images

1. **Add to GitHub**: Push image to Bridgewater-Images repo
2. **Update Code**: Reference in component using CDN_CONFIG
3. **CDN Cache**: Wait 24h for automatic cache, or purge manually

```tsx
// Example: Adding new academic image
<Image
  src={CDN_CONFIG.getCdnUrl("images/academics/new-image.jpg")}
  alt="New Program"
  width={600}
  height={400}
/>
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Image not loading | Check GitHub repo is public, file exists, correct path |
| Slow loading | Image size too large, compress before uploading |
| 24h old version | jsDelivr cached old version, use purge URL |
| 404 error | Check file exists in repo, check path spelling |

## Helpful Links

- jsDelivr: https://www.jsdelivr.com
- GitHub Repo: https://github.com/achsamrat-bwic/Bridgewater-Images
- Config File: [lib/cdn-config.ts](lib/cdn-config.ts)
- Full Guide: [CDN_SETUP.md](CDN_SETUP.md)
- Optimization: [IMAGE_OPTIMIZATION.md](IMAGE_OPTIMIZATION.md)

---

**Last Updated**: February 12, 2026
