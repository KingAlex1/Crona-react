const keyMirror = require('keymirror')

exports.envs = keyMirror({
    development: null,
    production: null,
    test: null,
})