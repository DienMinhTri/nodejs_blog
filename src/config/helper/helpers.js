const moment = require('moment');

// Helper function to format date
module.exports = function(Handlebars) {
    Handlebars.registerHelper('formatDate', function(date) {
        return moment(date).format('DD/MM/YY, HH:mm:ss');
    });
};