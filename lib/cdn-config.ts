// jsDelivr CDN Configuration for Bridgewater Images
export const CDN_CONFIG = {
  // GitHub repository details
  owner: 'achsamrat-bwic',
  repo: 'Bridgewater-Images',
  
  // Get base CDN URL
  getBaseUrl: () => {
    return `https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images`;
  },

  // Transform local image paths to CDN URLs
  getCdnUrl: (localPath: string): string => {
    if (!localPath) return '';
    
    // If already a full CDN URL, return as is
    if (localPath.startsWith('http')) {
      return localPath;
    }
    
    // Remove leading ./ or /
    let cleanPath = localPath.replace(/^\.\//, '').replace(/^\//, '');
    
    // Return full CDN URL
    return `https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/${cleanPath}`;
  },

  // Image optimization parameters for quality at different sizes
  getOptimizedUrl: (imagePath: string, width?: number, quality: number = 80): string => {
    const cdnUrl = CDN_CONFIG.getCdnUrl(imagePath);
    
    // jsDelivr doesn't support query parameters for optimization,
    // but you can use Cloudinary or similar for advanced optimization
    // For now, return the raw CDN URL
    return cdnUrl;
  },

  // Get image URL with lazy loading optimization
  getLazyLoadUrl: (imagePath: string): string => {
    return CDN_CONFIG.getCdnUrl(imagePath);
  },
};

// Helper function to batch transform multiple image URLs
export const transformImageUrls = (urls: string[]): string[] => {
  return urls.map(url => CDN_CONFIG.getCdnUrl(url));
};

// Helper for debugging - logs the transformation
export const debugCdnUrl = (imagePath: string): void => {
  const original = imagePath;
  const transformed = CDN_CONFIG.getCdnUrl(imagePath);
  console.log(`[CDN] ${original} → ${transformed}`);
};
