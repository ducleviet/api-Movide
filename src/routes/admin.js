import express from 'express';
import AdminController from '../app/controllers/AdminController.js';
export const admin = express.Router();

admin.get('/stored/courses', AdminController.storedCourses);
