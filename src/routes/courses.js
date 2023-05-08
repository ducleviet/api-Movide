import express from 'express';
import CourseController from '../app/controllers/CourseController.js';
export const courses = express.Router();

courses.get('/create', CourseController.create);
courses.post('/store', CourseController.store);
courses.get('/:id/add', CourseController.add);
courses.put('/:id', CourseController.update);
courses.get('/:slug', CourseController.show);
