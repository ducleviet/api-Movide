import MyModel from '../models/Course.js';
import { mutipleMongooseToObject } from '../../util/mongoose.js';

class SiteController {
    index(req, res, next) {
        // res.render('home');

        MyModel.find({})
            .then((courses) =>
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch((err) => next(err));
    }

    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
