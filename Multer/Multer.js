const multer= require('multer')
const path= require('path')

// Env is used to hide some stuff like password, databaseName
// install it and require
// to store the uploaded image in a folder. the diskStorage is a method in multer that stores files 
const storage=  multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

// the function to check for the file extension that is allowed to be uploaded
const fileFIlter= (req, file, cb) => {
    const ext = path.extname(file.originalname)

    if(ext!=='.jpg' || ext !== '.jpeg' || ext !== '.png') {
        cb(null, new Error('File format not supported'), false)
    }else {
        cb(null, true)
    }
}

const imageUploader = multer({
    storage: storage,
    fileFIlter: fileFIlter,

    // since we did not create it outside we are checking for the file size in the object
    limits: {
        fileSize: 1024*1024*20
    }
// the .single is a method used to upload one file, to upload more than one image use the .array 
}).single('image') 


module.exports= imageUploader