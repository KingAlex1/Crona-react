const {MONGO_URI} = require('../config')
const mongooseConnector = require('../connectors/mongoose-connector')
const newsSeeds = require('./news-seeds')
const userSeeds = require('./user-seeds')

initSeeds()

async function initSeeds() {
    const mongoConnection = await mongooseConnector(MONGO_URI)

    await mongoConnection.connection.collections['news'].drop()


    try {
        // const users = await userSeeds()
        const news = await newsSeeds()

    } catch (e) {
        console.error(e)
    }
    finally {
        mongoConnection.connection.close()
    }

}
