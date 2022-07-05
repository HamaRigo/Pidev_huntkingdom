const router=require('express').Router();
const authController=require('./../services/auth.controller')
router.post('/register',authController.register);
router.post('/login',authController.login);
router.post('/logout',authController.logout);
module.exports=router;