import { isUndefined, isUndefinedOrNull } from 'utils/check'
import { ObjectId } from 'mongodb'
import PostModel from 'models/Post'

export default {
  userPosts: async (root, args, { req }) => {
    try {
      const { limit, page } = args.paginateInput || {}
      const { archieved } = args.postFilter || {}

      if (isUndefinedOrNull(req.user)) throw new Error('Unauthorized user')

      const options = {
        page: isUndefined(page) ? 1 : page,
        limit: isUndefined(limit) ? 10 : limit,
        populate: 'createdBy'
      }

      const filter = { createdBy: ObjectId(req.user.id) }
      if (!isUndefined(archieved)) filter['archieved'] = archieved

      return await PostModel.paginate(filter, options)
    } catch (err) {
      throw new Error(err)
    }
  }
}
