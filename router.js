const express=require('express');
const router=express.Router();
const control=require('./controller');

router.get('/detail',control.detail);
router.post('/insert',control.insert);
router.post('/update',control.update);
router.post('/deleted',control.deleted);
router.post('/edit',control.edit);
module.exports=router;