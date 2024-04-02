const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "An Exercise name is required!"],
            unique: true,
            trim: true
        },
        description: { type: String },
        duration: { type: Number },
        audio: { type: String },  
    },
    {
        timestamps: true,
        versionKey: false
    }
);

//genera un bjson con coordenadas que accede a location; es decir, mongoose obtiene los lugares mediante coordenadas
exerciseSchema.index({ 'location': '2dsphere' });

const Exercise = model("Exercise", exerciseSchema)

module.exports = Exercise