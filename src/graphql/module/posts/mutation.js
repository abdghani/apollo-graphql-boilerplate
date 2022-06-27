import { PubSub } from 'graphql-subscriptions';
import PostModel from 'models/Post'
import { isUndefined, isUndefinedOrNull } from 'utils/check'
import { pubsub } from 'config/pubsub'

export default {
    createPost: async (parent, args, { req }) => {
        try {
            if (isUndefinedOrNull(req.user)) throw new Error('Unauthorized user')

            const { title, content } = args

            let newPost = PostModel({
                title,
                content: isUndefined(content) ? '' : content,
                createdBy: req.user.id
            })

            await newPost.save()
            newPost = await PostModel.findById(newPost._id).populate('createdBy')

            // publishing event
            pubsub.publish('POST_CREATED', { postCreated: newPost });

            return newPost
        } catch (err) {
            throw new Error(err)
        }
    }
}
