const express = require('express')
const router = express.Router()

const reviewController = require('../controllers/reviews')


router.get('/', reviewController.getAll)
router.get('/:reviewsId', reviewController.getOne)
router.post('/:snackId', reviewController.create)
router.put('/:reviewsId', reviewController.update)
router.delete('/:reviewsId', reviewController.remove)

module.exports = router
