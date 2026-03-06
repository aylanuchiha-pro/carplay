/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- C'EST LA LIGNE MAGIQUE MANQUANTE
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/carplay', // <--- INDISPENSABLE pour que GitHub trouve tes images et ton CSS
}

export default nextConfig