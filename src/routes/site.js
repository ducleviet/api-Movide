import express from 'express';
import SiteController from '../app/controllers/SiteController.js';
export const site = express.Router();

site.get('/search', SiteController.search);
site.get('/', SiteController.index);
