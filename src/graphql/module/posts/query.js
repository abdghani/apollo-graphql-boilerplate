import { isUndefinedOrNull } from 'utils/check'
import { ObjectId } from 'mongodb'
import PostModel from 'models/Post'

export default {
    userPosts: async (root, args, { req }) => {
        try {
            if (isUndefinedOrNull(req.user))
                throw new Error('Unauthorized user')
            const posts = await PostModel
                .find({ createdBy: ObjectId(req.user.id) })
                .populate('createdBy')
            return posts
        } catch (err) {
            throw new Error(err)
        }
    }
}
