const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const timestampPlugin = require('mongoose-timestamp2').default;

mongoose.plugin(slug, timestampPlugin);

const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, required: true},
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true},
    level: {type: String},
    slug: { type: String, slug: "name", unique: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('course', Course);