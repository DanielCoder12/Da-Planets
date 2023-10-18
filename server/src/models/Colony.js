import { Schema } from "mongoose";

export const ColonySchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 50 },
        population: { type: Number, required: true, min: 1, max: 100000000 },
        planetId: { type: Schema.Types.ObjectId, required: true },
        speciesId: { type: Schema.Types.ObjectId, required: true }
    },
    {
        timestamps: true, toJSON: { virtuals: true }
    }
)

ColonySchema.virtual('planet', {
    localField: 'planetId',
    foreignField: '_id',
    justOne: true,
    ref: 'Planet'
})

ColonySchema.virtual('species', {
    localField: 'speciesId',
    foreignField: '_id',
    justOne: true,
    ref: 'Species'
})