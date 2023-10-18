import { speciesPluralService } from "../services/SpeciesPluralService.js";
import BaseController from "../utils/BaseController.js";

export class SpeciesPluralController extends BaseController {
    constructor() {
        super('api/species')
        this.router
            .post('', this.createSpecies)
            .get('', this.getSpecies)
    }
    async createSpecies(request, response, next) {
        try {
            const species = await speciesPluralService.createSpecies(request.body)
            return response.send(species)
        } catch (error) {
            next(error)
        }
    }

    async getSpecies(request, response, next) {
        try {
            const species = await speciesPluralService.getSpecies()
            return response.send(species)
        } catch (error) {
            next(error)
        }
    }
}