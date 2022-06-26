module.exports =
  process.env.NODE_ENV !== 'production'
    ? { origin: '*', credentials: true }
    : { origin: 'www.your-website.com', credentials: true }
