import path from "path";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */
const env = process.env;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    output:
      env.NEXT_PUBLIC_DEPLOY_DESTINATION === "local" ? "standalone" : "export",
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
