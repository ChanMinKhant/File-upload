require("dotenv").config();
const express = require("express");
const app = express();
const multer = require('multer');
const File = require('./Model/file')
const path = require('path');
const connectDB = require("./Config/dbConnect");
connectDB();
const port = process.env.PORT || 3000;

/*
const fileName = new File({
  fileName : "abc",
  filePath : "img/photo.png"
});
fileName.save()
.then(doc => console.log(doc))
.catch(err => console.log(err));
*/
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/upload', (req, res) => {
  res.render('index.ejs');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'upload'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const originalExtension = path.extname(file.originalname);
    const filename = file.fieldname + '-' + uniqueSuffix + originalExtension;
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('uploaded_file'), (req, res) => {
  
  /*const FILE = new File{
    fileName: ,
    filePath:req.body.,
    year: req.body.year,
    sem: req.body.sem
  }*/
  const uploadedFile = req.file;
  const originalFileName = req.file.originalname;
  const fileType = req.file.mimetype;
  const year = req.body.year;
  const sem = req.body.sem;
  
  // Handle the success of the file upload
  res.send(`File uploaded successfully. Original file name: ${req.file.filename}. File type: ${fileType}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
