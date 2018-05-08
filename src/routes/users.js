const express = require('express')
const router = express.Router()
const controller = require('../controllers/users')


router.get('/:usersId', controller.getOne)
router.get('/:usersId/requestUser/:reqUser', controller.getUserbyEmail)
router.post('/', controller.create)
router.post('/:usersID', controller.update)
router.delete('/:usersId', controller.remove)


//reviews through users

const reviewController = require('../controllers/reviews')

router.get('/:usersId/reviews', reviewController.getAll)
router.get('/:usersId/reviews/:reviewsId', reviewController.getOne)
router.post('/:usersId/reviews', reviewController.create)
router.post('/:userId/reviews/:reviewsId', reviewController.update)
// router.delete('/:requestUser/reviews/:reviewsId', reviewController.remove)

module.exports = router
