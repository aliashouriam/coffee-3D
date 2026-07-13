import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Tell Next.js we are serving from a subfolder
  basePath: '/coffee',
  
  // 2. Optional: If you are doing a static export to host on a standard cPanel/Apache server
  // output: 'export', 
  
  // Keep your existing three.js / canvas configs if any
  transpilePackages: ['three'], 
};

export default nextConfig;