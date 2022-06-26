import UserModel from 'models/User'
import { isNull } from 'utils/check'
import bcrypt from 'bcrypt'
import setTokens from 'utils/jwtToken'
import checkInput from 'utils/joiValidate'
import { tokenCookies } from './util'

export default {
  // Logout
  // logout: async (parent, args, {req}) => {
  // 	if (req.user == null) return responseFinal('403','You are not Logged In');
  // 	let userId = req.user.id;
  // 	try {
  // 		log.info(`user:${formatter(userId)},action:logout`);
  // 		res.clearCookie('access');
  // 		res.clearCookie('refresh');
  // 		return responseFinal('200','You are logged out.');
  // 	} catch (error) {
  // 		return responseFinal('404','Some Error try again.');
  // 	}
  // },

  login: async (parent, args, { res }) => {
    try {
      let { email, password } = args

      // JOI check
      checkInput(['email', 'password'], args)

      let user = await UserModel.findOne({ email })
      if (isNull(user)) throw new Error('User not found')

      let isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) throw new Error('Invalid password')

      const tokens = setTokens(user)

      const cookies = tokenCookies(tokens)
      res.cookie(...cookies.access)
      res.cookie(...cookies.refresh)

      return {
        userId: user.id,
        code: 200,
        success: true,
        message: 'Login successfull',
        ...tokens
      }
    } catch (err) {
      throw new Error(err)
    }
  },
  // Signup
  signup: async (parent, args) => {
    try {
      let { username, email, password } = args
      checkInput(['name', 'username', 'email', 'password'], args)
      let user
      user = await UserModel.emailExist(email)
      if (!isNull(user)) throw new Error('Email already exists')
      user = await UserModel.usernameExist(username)
      if (!isNull(user)) throw new Error('username already exists')

      // let otp = generateOTP();
      let hash = await bcrypt.hash(password, 10)
      let newUser = new UserModel({
        ...args,
        password: hash,
        verified: true,
        email: email.toLowerCase()
      })
      await newUser.save()
      return {
        code: 200,
        success: true,
        message: 'New Account Created Successfully'
      }
    } catch (err) {
      throw new Error(err)
    }
  }
}
