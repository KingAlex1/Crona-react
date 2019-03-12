const {MONGO_URI} = require('../config')
const mongooseConnector = require('../connectors/mongoose-connector')
const newsSeeds = require('./news-seeds')
const userSeeds = require('./user-seeds')
const blogSeeds = require('./blog-seeds')
const codesSeeds = require('./tnved')

initSeeds()

async function initSeeds() {
    const mongoConnection = await mongooseConnector(MONGO_URI)

    // await mongoConnection.connection.collections['news'].drop()
    // await mongoConnection.connection.collections['blogs'].drop()
   // await mongoConnection.connection.collections['codes'].drop()


    try {
        // const users = await userSeeds()
        const news = await newsSeeds()
        const blog = await blogSeeds()
        // const codes = await codesSeeds()

    } catch (e) {
        console.error(e)
    }
    finally {
        mongoConnection.connection.close()
    }

}
