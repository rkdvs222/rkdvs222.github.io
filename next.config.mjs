/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const customConfig = {
    basePath: "",
    eslint: {
      dirs: ["src/component/", "src/libs/", "src/pages/", "src/app/"],
    },
    reactStrictMode: true,
    distDir: "build",
    experimental: {
      appDir: true,
    },
    output: "export",
    images: {
      unoptimized: true,
    },
  };

  return customConfig;
};

export default nextConfig;
