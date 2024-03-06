/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const customConfig = {
    eslint: {
      dirs: ["src/component/", "src/lib/", "src/pages/"],
    },
    reactStrictMode: true,
    distDir: "build",
    experimental: {
      appDir: true,
    },
    output: "export",
  };

  return customConfig;
};

export default nextConfig;
