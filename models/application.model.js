const { Schema, model } = require("mongoose");

const applicationSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "An Application name is required!"],
            unique: true,
            trim: true
        },
        description: { type: String },
        url: { type: String },
        meditation_sessions: { type: String },
        other_resources: { type: String },
        exercises : { type: String },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

//genera un bjson con coordenadas que accede a location; es decir, mongoose obtiene los lugares mediante coordenadas
applicationSchema.index({ 'location': '2dsphere' });

const Application = model("Application", applicationSchema)

module.exports = Application