import { Schema } from "mongoose";

export const PlanetSchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 50 },
        biome: { type: String, required: true, maxLength: 50 },
        atmosphere: { type: Boolean, required: true, default: false },
        galaxyId: { type: Schema.Types.ObjectId, required: true }
    },
    {
        timestamps: true, toJSON: { virtuals: true }
    }
)

PlanetSchema.virtual('galaxy', {
    localField: 'galaxyId',
    foreignField: '_id',
    justOne: true,
    ref: 'Galaxy'
})