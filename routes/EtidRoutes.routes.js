const express = require('express');
const etidPhy = require('../controllers/Edit/etidPhy.js');
const etidApp = require('../controllers/Edit/etidApp.js');
const etidAra = require('../controllers/Edit/etidAra.js');
const etidBio = require('../controllers/Edit/etidBio.js');
const etidChe = require('../controllers/Edit/etidChe.js');
const etidEng = require('../controllers/Edit/etidEng.js');
const etidFre = require('../controllers/Edit/etidFre.js');
const etidPur = require('../controllers/Edit/etidPur.js');
const router = express.Router();

router.put('/Physics', etidPhy );
router.put('/AppliedMathematics', etidApp);
router.put('/Arabic', etidAra );
router.put('/Biology', etidBio );
router.put('/Chemistry', etidChe );
router.put('/Englich', etidEng);
router.put('/French', etidFre );
router.put('/Puremathematics', etidPur);

module.exports = router;