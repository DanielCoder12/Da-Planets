import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('', this.getPlanets)
            .post('', this.createPlanet)
        // .get('', this.test)
    }

    async getPlanets(request, response, next) {
        try {
            const planets = await planetsService.getPlanets()
            return response.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async test(req, res, next) {
        return res.send('this is working')
    }
    async createPlanet(request, response, next) {
        try {
            const planetDate = request.body

            const planet = await planetsService.createPlanet(request.body)
            return response.send(planet)
        } catch (error) {
            next(error)
        }
    }

}