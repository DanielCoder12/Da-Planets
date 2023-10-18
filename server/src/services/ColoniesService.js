import { dbContext } from "../db/DbContext.js"

class ColoniesService {
    async getColonies() {
        const colonies = await dbContext.Colonies.find().populate('species').populate('planet')
        return colonies
    }
    async createColony(body) {
        const colony = await dbContext.Colonies.create(body)
        return colony
    }
}

export const coloniesService = new ColoniesService()