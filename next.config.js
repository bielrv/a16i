/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Common hostname for Google user content images
        port: '',
        pathname: '**'
      }
    ]
  }
}
