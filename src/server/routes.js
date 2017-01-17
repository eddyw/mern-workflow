import { Router } from 'express';
// Controllers
import HelloWorld from './controller/HelloWorld';

const router = Router();

// Routes
router.get('/', HelloWorld);
router.get('/one', HelloWorld);
router.get('/two', HelloWorld);

export default router;
