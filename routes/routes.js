const express = require('express')
const router = express.Router()

const fileupload  = require('../controllers/fileupload')
const show = require('../controllers/show')

router.post('/', fileupload)
//router.get('/:uuid', show )

// const router = require('express').Router();
// const multer = require('multer');
// const path = require('path');
// const File = require('../models/uploadfile')
// const { v4: uuidv4 } = require('uuid');

// let storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, 'uploads/') ,
//     filename: (req, file, cb) => {
//         const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
//               cb(null, uniqueName)
//     } ,
// });

// let upload = multer({ storage, limits:{ fileSize: 1000000 * 100 }, }).single('myfile'); //100mb

// router.post('/files', (req, res) => {
//     upload(req, res, async (err) => {
//       if (err) {
//         return res.status(500).send({ error: err.message });
//       }
//         const file = new File({
//             filename: req.file.filename,
//             uuid: uuidv4(),
//             path: req.file.path,
//             size: req.file.size
//         });
//         const response = await file.save();
//         res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });

//         ///"file": "http://localhost:3000/files/fa689e62-23a1-4939-b178-c5c60f6f3530"
//       });
// });


module.exports = router