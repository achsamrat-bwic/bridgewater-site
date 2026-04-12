# jsDelivr CDN Setup for Bridgewater Images

## Overview

This document explains the jsDelivr CDN setup for serving images from the GitHub repository at `https://github.com/achsamrat-bwic/Bridgewater-Images`.

## What is jsDelivr?

jsDelivr is a free, open-source CDN (Content Delivery Network) that can serve content from GitHub repositories. Benefits include:

- **Global CDN Distribution**: Images are cached and served from the nearest server to users
- **Fast Load Times**: Significantly faster image delivery compared to local hosting
- **Reduced Server Load**: Your server bandwidth usage decreases
- **No Configuration Required**: Works directly with GitHub
- **Caching**: Content is cached globally for optimal performance

## CDN Configuration

The CDN configuration is located in [`lib/cdn-config.ts`](lib/cdn-config.ts).

### Basic Configuration

```typescript
const baseUrl = `https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images`;
```

### File Structure on GitHub

The images in your GitHub repository should be organized as:

```
Bridgewater-Images/
├── logo.png
├── danfe.png
├── herosection1.webp
├── library.jpeg
└── images/
    ├── academics/
    │   ├── science_students_lab_cf9128c4.jpg
    │   └── ... (other academic images)
    ├── leadership/
    │   ├── ca.jpeg
    │   ├── principal.jpeg
    │   ├── vice-principal.jpeg
    │   └── ... (other leadership images)
    └── Homegallery/
        ├── building.jpg
        ├── farewell.jpg
        ├── computerlab.jpeg
        └── ... (other gallery images)
```

## Usage

### CDN URL Format

The jsDelivr CDN URL format is:

```
https://cdn.jsdelivr.net/gh/<owner>/<repo>/<path>
```

For your repository:

```
https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/images/academics/science_students_lab_cf9128c4.jpg
```

### Using in Components

Import and use the `CDN_CONFIG` utility:

```tsx
import { CDN_CONFIG } from "@/lib/cdn-config";

export default function MyComponent() {
  return (
    <Image
      src={CDN_CONFIG.getCdnUrl("logo.png")}
      alt="Logo"
      width={48}
      height={48}
    />
  );
}
```

### With Subdirectories

```tsx
// For images in subdirectories
<Image
  src={CDN_CONFIG.getCdnUrl("images/academics/science_students_lab_cf9128c4.jpg")}
  alt="Science Lab"
  width={600}
  height={400}
/>
```

## Updated Components

The following components have been updated to use jsDelivr CDN:

| Component | Status | Images |
|-----------|--------|--------|
| `MainNavBar` | ✅ Updated | logo.png, danfe.png |
| `HeroSection` | ✅ Updated | herosection1.webp |
| `GalleryCarousel` | ✅ Updated | Gallery images from JSON |
| `Gallery Page` | ✅ Updated | Gallery images |
| `Library Page` | ✅ Updated | library.jpeg |
| `ProgramPage` | ✅ Updated | Academic program images |
| `TestimonialsSection` | ✅ Updated | Testimonial avatars |
| `LeadershipSection` | ✅ Updated | Leadership team images |
| `Footer` | ✅ Updated | logo.png |

## Performance Optimization Tips

### 1. Image Formats

Use modern image formats for better compression:

- **WebP**: Best compression, use for hero images
- **JPEG**: Good for photos
- **PNG**: Use for logos (with transparency)
- **AVIF**: Newest format, best compression (check browser support)

### 2. Image Sizing

Always specify image dimensions to prevent layout shift:

```tsx
<Image
  src={CDN_CONFIG.getCdnUrl("logo.png")}
  alt="Logo"
  width={48}
  height={48}
  priority  // Use for above-the-fold images
/>
```

### 3. Lazy Loading

Next.js Image component automatically lazy loads images. Use `priority` for hero images:

```tsx
<Image
  src={CDN_CONFIG.getCdnUrl("herosection1.webp")}
  alt="Hero"
  priority  // Loads immediately
/>
```

### 4. Responsive Images

Let Next.js Image component handle responsiveness:

```tsx
<Image
  src={CDN_CONFIG.getCdnUrl("image.jpg")}
  alt="Responsive"
  fill  // Uses parent container size
  className="object-cover"
/>
```

### 5. Image Optimization

Next.js automatically optimizes images by:

- Converting to modern formats (WebP, AVIF)
- Lazy loading
- Responsive serving
- Caching

## GitHub Repository Setup

For optimal CDN performance, follow these steps:

1. **Create GitHub Repository**: 
   ```
   https://github.com/achsamrat-bwic/Bridgewater-Images
   ```

2. **Organize Images**: 
   - Put all images in the repository root or subdirectories
   - Use clear naming conventions (e.g., `science_students_lab_cf9128c4.jpg`)

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add Bridgewater images"
   git push origin main
   ```

4. **jsDelivr Caching**:
   - Non-versioned URLs use the default branch (main)
   - CDN caches content for 24 hours
   - To clear cache: `https://purge.jsdelivr.net/gh/...`

## Adding New Images

When adding new images to your GitHub repository:

1. Update the repository locally
2. Push changes to GitHub
3. Update your code to reference the new images:

```tsx
<Image
  src={CDN_CONFIG.getCdnUrl("images/new-folder/new-image.jpg")}
  alt="New Image"
  width={600}
  height={400}
/>
```

4. jsDelivr will auto-update within the cache refresh period

## Advanced Usage

### Custom Image Optimization

For advanced optimization, you can create a helper function:

```typescript
export const getOptimizedImageUrl = (
  imagePath: string,
  width: number = 800,
  quality: number = 80
): string => {
  // Use an image optimization service if needed
  // For now, return the CDN URL
  return CDN_CONFIG.getCdnUrl(imagePath);
};
```

### Image Variant URLs

Create different sizes for responsive design:

```typescript
export const getImageVariants = (imagePath: string) => {
  return {
    small: CDN_CONFIG.getCdnUrl(imagePath),
    medium: CDN_CONFIG.getCdnUrl(imagePath),
    large: CDN_CONFIG.getCdnUrl(imagePath),
  };
};
```

## Troubleshooting

### Images Not Loading

1. **Check File Exists**: Verify the image is in the GitHub repository
2. **Check URL Format**: Ensure path is correct
3. **Check Branch**: Make sure you're using the default branch (main)
4. **Cache TTL**: CDN caches for 24 hours; wait or use purge endpoint

### Slow Loading

1. **Check Image Size**: Optimize image file size before uploading
2. **Use Modern Formats**: WebP images are faster
3. **Global Location**: jsDelivr serves from nearest server automatically

## Migration from Local to CDN

To migrate existing images:

1. **Push Images to GitHub**: Upload all images to the Bridgewater-Images repo
2. **Update Components**: Replace local paths with CDN URLs using `CDN_CONFIG`
3. **Test Thoroughly**: Verify all images load correctly
4. **Monitor Performance**: Track load times before and after

## Security & Compliance

- **Public Repositories**: Ensure the GitHub repository matches your privacy requirements
- **Copyright**: Only include images you have rights to use
- **GDPR**: If using images of people, ensure appropriate consent

## Useful Links

- [jsDelivr Documentation](https://www.jsdelivr.com/)
- [jsDelivr GitHub Guide](https://www.jsdelivr.com/features?features=github)
- [Next.js Image Component](https://nextjs.org/docs/basic-features/image-optimization)
- [Web Performance Best Practices](https://web.dev/performance/)

## Support

For issues with CDN setup:

1. Check GitHub repository is public
2. Verify file paths are correct
3. Clear browser cache
4. Check jsDelivr status page

---

**Last Updated**: February 12, 2026  
**Configuration File**: [`lib/cdn-config.ts`](lib/cdn-config.ts)
