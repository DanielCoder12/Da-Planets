import { dbContext } from "../db/DbContext.js"

class PlanetsService {
    createPlanet(body) {
        const planet = dbContext.Planets.create(body)

        return planet
    }
    getPlanets() {
        const planets = dbContext.Planets.find().populate('galaxy')
        return planets
    }
}

export const planetsService = new PlanetsService()