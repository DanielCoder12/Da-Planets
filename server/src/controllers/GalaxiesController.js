import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .post('', this.createGalaxy)
            .get('', this.getGalaxies)
    }

    async createGalaxy(request, response, next) {
        try {
            const galaxies = await galaxiesService.createGalaxy(request.body)
            return response.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxies(request, response, next) {
        try {
            const galaxies = await galaxiesService.getGalaxies()
            return response.send(galaxies)
        } catch (error) {
            next(error)
        }
    }
}