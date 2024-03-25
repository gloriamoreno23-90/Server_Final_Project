const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "A Restaurant name is required!"],
            unique: true,
            trim: true
        },
        neighborhood: { type: String },
        address: {
            type: String,
            required: true,
            trim: true
        },
        location: {
            type: {
                type: String,
                enum: ["Point"],
                default: "Point"
            },
            coordinates: {
                type: [Number],
                default: [0, 0],
            }
        },
        image: {
            type: String,
            default: 'https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/12/23/61c456cc62a0b.r_d.2520-1680-0.jpeg'
        },
        cuisine_type: {
            type: String,
            required: true,
            trim: true
        },
        operating_hours: {
            Monday: { type: String },
            Tuesday: { type: String },
            Wednesday: { type: String },
            Thursday: { type: String },
            Friday: { type: String },
            Saturday: { type: String },
            Sunday: { type: String },
        },
        reviews: [
            {
                _id: false,
                name: { type: String },
                date: { type: Date },
                rating: { type: Number },
                comments: { type: String }
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

//genera un bjson con coordenadas que accede a location; es decir, mongoose obtiene los lugares mediante coordenadas
restaurantSchema.index({ 'location': '2dsphere' });

const Restaurant = model("Restaurant", restaurantSchema)

module.exports = Restaurant