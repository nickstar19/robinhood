const express = require('express');
const { assignLocation, fetchLocations, updateStatus,fetchAllLocations } = require('../controller/location-controller')

const router = express.Router();

router.post("/assignlocation",assignLocation);
router.get("/memberlocations",fetchLocations);
router.post("/updatestatus", updateStatus);
router.get("/fetchalllocations",fetchAllLocations);

module.exports = router;