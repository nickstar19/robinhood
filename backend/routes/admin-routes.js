const express = require('express');
const {fetchMembers,updateStatus,getAddedMembers} = require('../controller/admin-controller');

const router = express.Router();

router.get("/fetchMembers",fetchMembers);
router.post("/updateStatus",updateStatus);
router.get("/addedmembers",getAddedMembers);

module.exports = router;