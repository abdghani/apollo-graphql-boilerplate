import User from 'models/User'
import { verify } from 'jsonwebtoken'
import setTokens from 'utils/jwtToken'
import { isUndefined } from 'utils/check'
import { tokenCookies } from 'graphql/module/users/util'

function validateAccessToken(token) {
  try {
    return verify(token, process.env.JWT_SECRET)
  } catch {
    return null
  }
}

function validateRefreshToken(token) {
  try {
    return verify(token, process.env.JWT_SECRET)
  } catch {
    return null
  }
}

const validateTokensMiddleware = async (req, res, next) => {
  const authHeader = req.headers?.authorization
  // console.log("authHeader", authHeader);
  if (!isUndefined(authHeader)) {
    const accessToken = authHeader.split(' ')[1]
    const decodedAccessToken = validateAccessToken(accessToken)
    if (decodedAccessToken && decodedAccessToken.user) {
      req.user = decodedAccessToken.user
      return next()
    }
    return next()
  }
  next()
}

const validateTokenSubsMiddleware = async (ctx, msg, args) => {
  // ctx is the graphql-ws Context where connectionParams live
  let currentUser;
  const authHeader = ctx.connectionParams?.Authorization

  if (!isUndefined(authHeader)) {
    const accessToken = authHeader.split(' ')[1]
    const decodedAccessToken = validateAccessToken(accessToken)
    if (decodedAccessToken && decodedAccessToken.user) {
      currentUser = decodedAccessToken.user
    }
  }
  
  return { currentUser };
};

module.exports = {
  validateTokensMiddleware,
  validateTokenSubsMiddleware
}
