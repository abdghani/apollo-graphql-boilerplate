import mongoose from 'mongoose'
// import mongoosePaginate from 'mongoose-paginate';

// const userSchema = mongoose.Schema;
const { Schema } = mongoose

const postSchema = new Schema(
    {
        title: {
            type: String,
            text: true,
            required: true
        },
        content: {
            type: String,
            text: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        archieved: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Post', postSchema)