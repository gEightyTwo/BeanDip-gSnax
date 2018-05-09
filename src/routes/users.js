const express = require('express')
const router = express.Router()

const controller = require('../controllers/users')


router.get('/:usersId', controller.getOne)
router.get('/:usersId/requestUser/:reqUser', controller.getUserbyEmail)
router.post('/', controller.create)
router.put('/:usersID', controller.update)
router.delete('/:usersId', controller.remove)


const reviewController = require('../controllers/reviews')

router.get('/reviews', reviewController.getAll)
router.get('/reviews/:reviewsId', reviewController.getOne)
router.post('/:usersId/reviews/:snackId', reviewController.create)
router.put('/:usersId/reviews/:reviewsId', reviewController.update)
router.delete('/:usersId/reviews/:reviewsId', reviewController.remove)

module.exports = router
