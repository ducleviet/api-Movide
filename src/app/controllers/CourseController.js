import MyModel from '../models/Course.js';
import { mongooseToObject } from '../../util/mongoose.js';

class CourseController {
    show(req, res, next) {
        MyModel.findOne({ slug: req.params.slug })
            .then((course) => {
                res.json(course);
                // res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
    //get courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //post courses/store
    store(req, res, next) {
        const formData = req.body;
        const course = new MyModel(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {});
    }

    //get /courses/:id/add
    add(req, res, next) {
        MyModel.findById(req.params.id)
            .then((course) =>
                res.render('courses/add', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //put /courses/:id
    update(req, res, next) {
        const newdata = MyModel.findById(req.params.id);
        newdata.then((data) => {
            data.videos.push({ id: req.body.id, video: req.body.video });
            res.json(data);
        });
    }
}

export default new CourseController();
