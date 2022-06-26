import PostModel from 'models/Post'
import { isUndefined, isUndefinedOrNull } from 'utils/check'

export default {
    createPost: async (parent, args, { req }) => {
        try {
            if (isUndefinedOrNull(req.user))
                throw new Error('Unauthorized user')

            const { title, content } = args
            
            const newPost = PostModel({
                title,
                content: isUndefined(content) ? "" : content,
                createdBy: req.user.id
            })

            await newPost.save()

            return {
                code: 200,
                success: true,
                message: 'Post Created Successfully'
            }
        } catch (err) {
            throw new Error(err)
        }
    }
}