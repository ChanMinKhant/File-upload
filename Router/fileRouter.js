const express = require('express')
const router = express.Router();
const fileController = require('./../Controller/fileController')
router.route('/upload')
       .get(fileController.getUploadPage)
       .post(fileController.postFile)
router.route('/subject')
       .get(fileController.subjectPage)
       
router.route('/subject/:sub')
       .get(fileController.resSubject)

module.exports = router;