import MyModel from '../models/Course.js';
import { mutipleMongooseToObject } from '../../util/mongoose.js';

class AdminController {
    //get /stored/courses
    storedCourses(req, res) {
        MyModel.find({})
            .then((courses) =>
                //     res.render('home', {
                //         courses: mutipleMongooseToObject(courses),
                //     }),
                res.json(courses),
            )
            .catch((err) => next(err));
    }
}

export default new AdminController();
