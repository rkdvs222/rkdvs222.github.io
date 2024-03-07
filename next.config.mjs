import path from "path";

/** @type {import('next').NextConfig} */
const env = process.env.NODE_ENV;
const nextConfig = async () => {
  const customConfig = {
    basePath: "",
    eslint: {
      dirs: ["src/component/", "src/libs/", "src/pages/", "src/app/"],
    },
    reactStrictMode: true,
    // distDir: "out",
    experimental: {
      appDir: true,
    },
    output: env == "development" ? "standalone" : "export",
    images: {
      unoptimized: true,
    },
    sassOptions: {
      includePaths: [path.join(__dirname, "./src/styles/")],
    },
  };

  return customConfig;
};

export default nextConfig;
