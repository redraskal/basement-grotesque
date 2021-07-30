const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')
const withTM = require('next-transpile-modules')
const withSvgr = require('next-svgr')

module.exports = withPlugins(
  [
    withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' }),
    withTM(['gsap']),
    withSvgr()
  ],
  {
    webpack5: true,
    reactStrictMode: true
  }
)
