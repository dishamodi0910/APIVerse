const getDetails = require('../controllers/getDetailsController');
const router = require("express").Router();

router.post('/getDetails/leetcode',getDetails.getLeetcode);
router.post('/getDetails/codechef',getDetails.getCodechef);
router.post('/getDetails/codeforces',getDetails.getCodeforces);


module.exports = router;