import { router } from './news.js';
import { admin } from './admin.js';
import { site } from './site.js';
import { courses } from './courses.js';

function route(app) {
    app.use('/news', router);
    app.use('/admin', admin);
    app.use('/courses', courses);
    app.use('/', site);
}
export default route;
