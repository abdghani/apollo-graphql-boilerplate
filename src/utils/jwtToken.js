import { sign } from 'jsonwebtoken'

const setTokens = user => {
  const sevenDays = 60 * 60 * 24 * 7 * 1000
  const fifteenMins = 60 * 15 * 1000
  const accessUser = {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role
  }
  const accessToken = sign({ user: accessUser }, process.env.JWT_SECRET, {
    expiresIn: fifteenMins
  })
  const refreshUser = {
    id: user.id
  }
  const refreshToken = sign({ user: refreshUser }, process.env.JWT_SECRET, {
    expiresIn: sevenDays
  })

  return { accessToken, refreshToken }
}

export default setTokens
