const tokenCookies = ({ accessToken, refreshToken }) => {
  const cookieOptions = {
    httpOnly: true
  }
  return {
    access: ['access', accessToken, cookieOptions],
    refresh: ['refresh', refreshToken, cookieOptions]
  }
}

module.exports = {
  tokenCookies
}
