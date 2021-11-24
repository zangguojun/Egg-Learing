const moment = require('moment');
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();
exports.formatUser = user => ({ id: user, author: 'buchiyu' })