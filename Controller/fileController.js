const multer = require('multer');
const path = require('path');
const File = require('./../Model/file')

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



exports.getUploadPage = (req, res) => {
  res.render('uploadForm.ejs');
};

exports.postFile =  (req, res) => {
  upload.single('uploaded_file')
  (req,res,(err) =>{ if(err){
  return res.status(400).json({ error: err.message })
  }
  
  //console.log(req.body.sub);
  //console.log(req.body.displayName);
  
  const FILE = new File ({
    fileName: req.body.displayName,
    filePathName: req.file.filename,
    subject: req.body.sub,
    semester: req.body.sem
  });
  FILE.save()
  .then(con => console.log(con) )
  .catch(err => console.log(err))
  //console.log(req.file.filename);
 /* const FILE = new File{
    fileName: ,
    filePath:req.body.,
    year: req.body.year,
    sem: req.body.sem
 }*/
   
  /*const FILE = new File{
    fileName: ,
    filePath:req.body.,
    year: req.body.year,
    sem: req.body.sem
  }*/
  /*const uploadedFile = req.file;
  const originalFileName = req.file.originalname;
  const fileType = req.file.mimetype;
  const year = req.body.year;
  const sem = req.body.sem;
  */
  // Handle the success of the file upload
  res.send(`File uploaded successfully. Original file name: . File type: `);
})}

exports.reqSubject = (req,res) => {
  const subj = req.params.subject;
  //findd out from database 
}

exports.resSubject = (req,res) => {
  //console.log(req.params[sub])
  console.log(req.params)
  let sub1 = req.params.sub;
 
  
 
  res.render('Subject',
  {subject:`this is page ${sub1}`})
}

exports.subjectPage = (req,res) =>{
  res.render('subjects')
}