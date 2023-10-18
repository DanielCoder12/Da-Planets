import { dbContext } from "../db/DbContext.js"

class SpeciesPluralService {
    async getSpecies() {
        const species = await dbContext.Species.find()
        return species
    }
    async createSpecies(body) {
        const species = await dbContext.Species.create(body)
        return species
    }
}

export const speciesPluralService = new SpeciesPluralService()