/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  //to define outsource images from external urls
  images: {
    domain: ['bayut-production.s3.eu-central-1.amazonaws.com'],
  },
};
