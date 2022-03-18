const express = require('express')
const route = express.Router()
const {createSchools, getAllSchools, getSchoolsById, updateSchoolsById,  deleteSchoolById} = require("../Controller/Controller")
const imageUploader= require("../Multer/Multer")


route.post("/create", imageUploader, createSchools)

// get all school name in the data
route.get("/get", getAllSchools)


// get school by id
route.get("/:id", getSchoolsById)


// update a school info by id
route.patch("/:id", updateSchoolsById)

//route to delete one
route.delete("/:id", deleteSchoolById)

// //route to delete all
// route.delete("/delete", deleteAllSchools)


// router.route('/create')
//     .post('/create')



module.exports = route