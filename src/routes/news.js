import express from 'express';
import NewController from '../app/controllers/NewController.js';
export const router = express.Router();

router.get('/:slug', NewController.show);
router.get('/', NewController.index);
