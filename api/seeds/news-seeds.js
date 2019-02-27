const faker = require('faker')
const _ = require('lodash')
const News = require('../modules/news/models/news')

module.exports = (users) => {

    if (!users || !users.length) {
        throw Error('Users is required');
    }
    
    const promises = [];

    _.times(400, () => {
        const newsPropmise = News.create({
            title: faker.lorem.words(2, 5),
            description: faker.lorem.lines(4, 10),
            date: faker.date.past(1),
            link: '#',
            tags: faker.lorem.words(3, 7).split(' '),
            userHash: users[faker.random.number(19)].hash,
            
        })

        promises.push(newsPropmise);
    })
    return Promise.all(promises);
}