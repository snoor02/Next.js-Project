/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['royalxcasino666.com'], // Add other domains if needed
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, s-maxage=3600, stale-while-revalidate=86400'
            }
          ]
        }
      ]
    }
  };
  
  export default nextConfig;