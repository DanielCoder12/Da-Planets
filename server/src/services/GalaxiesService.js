import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
    async createGalaxy(body) {
        const galaxy = await dbContext.Galaxies.create(body)
        return galaxy
    }
    async getGalaxies() {
        const galaxy = await dbContext.Galaxies.find().populate('planetCount')
        return galaxy
    }
}

export const galaxiesService = new GalaxiesService()