const { withContentlayer } = require("next-contentlayer");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  // compress: true,
  // swcMinify: true,
};

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
