import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Video = new Schema({
    id: { type: Number },
    video: { type: String },
});

const Course = new Schema(
    {
        name: { type: String },
        description: { type: String },
        img: { type: String },
        category: { type: String },
        videos: [Video],
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true },
);

const MyModel = mongoose.model('Course', Course);
export default MyModel;
