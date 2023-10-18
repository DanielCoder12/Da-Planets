import { coloniesService } from "../services/ColoniesService.js";
import BaseController from "../utils/BaseController.js";

export class ColoniesController extends BaseController {
    constructor() {
        super('api/colonies')
        this.router
            .post('', this.createColony)
            .get('', this.getColonies)


    }
    async createColony(request, response, next) {
        try {
            const colony = await coloniesService.createColony(request.body)
            return response.send(colony)
        } catch (error) {
            next(error)
        }
    }

    async getColonies(request, response, next) {
        try {
            const colony = await coloniesService.getColonies()
            return response.send(colony)
        } catch (error) {
            next(error)
        }

    }
}