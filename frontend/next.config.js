/** @type {import('next').NextConfig} */

const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/messenger',
  //       destination: '/feeds',
  //     },
  //     // {
  //     //   source: '/messenger/:slug',
  //     //   destination: '/feeds',
  //     // },
  //   ];
  // },
  compiler: {
    styledComponents: true,
  },
  env: {
    API_URL: 'http://localhost:8080',
  },
};

module.exports = nextConfig;

//   webpack: (config) => {
//     config.externals = {
//       bufferutil: "bufferutil",
//       "utf-8-validate": "utf-8-validate",
//     };
//     return config;
//   },
