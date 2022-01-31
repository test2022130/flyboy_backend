const router = require('express').Router();
const {
    body
} = require('express-validator');

const { checkUser } = require('./controllers/checkUserController');

router.get('/test', function (request, response) {
    response.send('Server is running');
});
router.post('/checkUser', [body('address')], checkUser);


module.exports = router;