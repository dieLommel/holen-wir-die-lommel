const IMMUTABLE = "public, max-age=31536000, immutable";

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async headers() {
    return [
      { source: "/sequence/:path*", headers: [{ key: "Cache-Control", value: IMMUTABLE }] },
      { source: "/models/:path*",   headers: [{ key: "Cache-Control", value: IMMUTABLE }] },
      { source: "/videos/:path*",   headers: [{ key: "Cache-Control", value: IMMUTABLE }] },
      { source: "/images/:path*",   headers: [{ key: "Cache-Control", value: IMMUTABLE }] },
    ];
  },
};

export default nextConfig;
