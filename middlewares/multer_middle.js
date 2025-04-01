const multer = require("multer")

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, "./public/images/upload")
    },
    filename: function (req, file, cb) {
      const fn = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + fn)
    }
})
  
const upload = multer({ storage });

module.exports = upload;

