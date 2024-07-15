import * as express from 'express';
import { validate } from 'express-validation';
import authValidator from '../validations/authValidator';


const router = express.Router();
const authController = require('../controllers/auth-controller');
const { catchValidationErrors } = require('../middlewares/auth-validator');

router.post('/', validate(authValidator.login), catchValidationErrors, authController.login);
router.delete('/', authController.logout);

export default router;