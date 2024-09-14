import { Router } from 'express';
import * as c from './booking.controllers.js';

const router = Router();

router.route('/').post(c.createOne);

export default router;
