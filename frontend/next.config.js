/** @type {import('next').NextConfig} */

const nextConfig = {
  //   webpack: (config) => {
  //     config.externals = {
  //       bufferutil: "bufferutil",
  //       "utf-8-validate": "utf-8-validate",
  //     };
  //     return config;
  //   },
  compiler: {
    styledComponents: true,
  },
  env: {
    API_URL: 'http://localhost:8080',
  },
};

module.exports = nextConfig;
