import { Router } from 'express';
import * as c from './auth.controllers.js';

const router = Router();

router.post('/register', c.register);
router.post('/login', c.login);

export default router;
