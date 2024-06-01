const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongoose')


class SiteController {
    //[GET] /
    index(req, res) {

        Course.find({}).lean()
            .then(courses => res.render('home', {
                courses
            }))
            .catch(err => res.status(400).json({ error: 'Error!!!' }));
        // res.render('home');
    }

    // async index(req, res, next) {
    //     try {
    //         const courses = await Course.find({});
    //         res.render('home', { courses: multipleMongooseToObject(courses)})
    //     } catch (error) {
    //         res.status(404).send('Error: ' + error.message);
    //     }
    // }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
