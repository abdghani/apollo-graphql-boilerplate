import { isUndefinedOrNull } from 'utils/check'
import UserModel from 'models/User'

export default {
  currentUser: async (root, args, { req }) => {
    try {
      if (isUndefinedOrNull(req.user)) throw new Error('Unauthorized user')

      return await UserModel.findById(req.user.id)
    } catch (err) {
      throw new Error(err)
    }
  }
}
