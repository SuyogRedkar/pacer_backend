const multer = require("multer");
const path = require("path");

// Multer config
module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        console.log(file.originalname)
        const ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".pdf" && ext !== ".doc" && ext !== ".docx") {
            cb(new Error("File type is not supported"), false);
            return;
        }
        cb(null, true);
    },
});



