import {Router} from 'express';
import contactRouter from './contact.routes';
import skillRouter from './skill.routes';
import connectionRouter from './connections.routes';

const routes = Router();


routes.use('/contact', contactRouter)
routes.use('/skill', skillRouter)
routes.use('/connection', connectionRouter)


export default routes;