/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Disables React Strict Mode
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.weatherapi.com',
          port: '',
          pathname: '/weather/**',
          search: '',
        },
      ],
    },
  };
  
  export default nextConfig;
  