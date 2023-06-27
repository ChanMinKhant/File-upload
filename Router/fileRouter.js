const express = require('express')
const router = express.Router();
const fileController = require('./../Controller/fileController')
router.route('/')
       .get(fileController.getUploadPage)
       .post(fileController.postFile)
       
router.route('/:subject')
       .get(fileController.changeSubject)

module.exports = router;