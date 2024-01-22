import express from 'express';
import { isAuthenticated } from '../middleware/auth.js';
import { paymentDetails } from '../controllers/paymentDetails.js';
const router=express.Router();

router.route('/paymentdetailsInfo').put(isAuthenticated,paymentDetails)

export default router;