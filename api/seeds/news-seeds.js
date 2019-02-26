const faker = require('faker')
const _ = require('lodash')
const News = require('../modules/news/models/news')

module.exports = (users) => {

    if (!users || !users.length) {
        throw Error('Users is required');
    }
    
    const promises = [];

    _.times(20, () => {
        const newsPropmise = News.create({
            title: faker.lorem.words(2, 5),
            description: faker.lorem.lines(4, 10),
            date: faker.date.past(1),
            link: '#',
            userId: users[faker.random.number(0, 19)]._id,
        })

        promises.push(newsPropmise);
    })
    return Promise.all(promises);
}