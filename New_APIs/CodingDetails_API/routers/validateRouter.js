const validate = require('../controllers/validateController');
const router = require("express").Router();

router.post('/validate/leetcode',validate.validateLeetcode);
router.post('/validate/codechef',validate.validateCodechef);
router.post('/validate/codeforces',validate.validateCodefoces);


module.exports = router;