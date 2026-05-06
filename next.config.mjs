/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // add image pplx-res.cloudinary.com to allowed domains
  images: {
    domains: ['pplx-res.cloudinary.com', 'picsum.photos'],
  },
};

export default nextConfig;
