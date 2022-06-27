import { withFilter } from 'graphql-subscriptions';
import { pubsub } from 'config/pubsub'
// const pubsub = new PubSub();

const resolvers = {
    postCreated: {
        subscribe: withFilter(
            () => pubsub.asyncIterator(['POST_CREATED']),
            (payload, variables, context) => {
                // notifying users other than the person who created the post
                const payloadUserId = payload.postCreated?.createdBy?._id
                const currentUserId = context.currentUser?.id
                return payloadUserId !== currentUserId;
            },
        ),
        // subscribe: () => pubsub.asyncIterator(['POST_CREATED'])
    }
};


module.exports = resolvers