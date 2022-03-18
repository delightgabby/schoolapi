const schoolModel = require ("../Model/Model.js")
const cloudinary = require("../cloudinary/cloudinary")
const fs = require("fs")

//function to create new school data
const createSchools = async (req, res) =>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        const newschool = await schoolModel.create({
            firstname: req.body.firstname,
            // lastname: req.body.lastname,
            // email: req.body.email,
            // password: req.body.password,
            // Note: req.body.firstname.charAt(0)+ req.body.lastname.charAt(0),
            // createdAt: req.body.createdAt,
            // createdBy: req.body.createdBy
            image: req.file.path,
            imageURL:result.secure_url,
            imageID:result.public_id
            
         
        })
        console.log(result)
        res.status(201).json({
            status: "success",
            message: newschool
        })


    }catch(error){
        res.status(404).json({
            status: "failure",
            message: error.message

        })

    }

}

//function to get all data
const getAllSchools = async (req, res) => {
    try {

        const allSchools = await schoolModel.find()
        res.status(200).json({
            message: "Collections found",
            data: allSchools 
        })
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


//function to get one school by ID
const getSchoolsById = async (req,res) => {
    try {
        const schoolsId = await schoolModel.findById(req.params.id)

        if(!schoolsId) {
            res.status(401).json({message:"School not found"})
        } else{
            res.status(200).json({
                message: "School with that id has been found",
                data: schoolsId
            })
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


//function to update by id
const updateSchoolsById = async (req, res) => {
    try {
        const school = await schoolModel.findByIdAndUpdate(req.params.id,{
            firstname: req.body.firstname,
            // lastname: req.body.lastname,
            // email: req.body.email,
            // password: req.body.password,
            // Note: req.body.firstname.charAt(0)+ req.body.lastname.charAt(0),
            // createdAt: req.body.createdAt,
            // createdBy: req.body.createdBy
            image: req.file.path

        }, {new:true})
        res.status(200).json({
            status: "Success",
            data: school
        })

    } catch (error) {
        res.status(404).json({
            status: "Failure",
            message: error.message
        })
    }
}


//delete one school by id
const deleteSchoolById = async (req, res) => {
    try {
        
        const school = await schoolModel.findById(req.params.id)
        await cloudinary.uploader.destroy(school.imageID)
        await fs.unlinkSync(school.image)
        const deleted = await schoolModel.findByIdAndRemove(req.params.id)
        res.status(204).json({
            status: "Success",
            message: "Successfully deleted"
        })
    } catch (error) {
        res.status(404).json({
            status: "Failure",
            message: error.message
        })
    }
}

// //delete one school by id
// const deleteAllSchools = async (req, res) => {
//     try {
//         const allSchools = await schoolModel.findAllByIdAndDeleteAll(req.params)
//         res.status(204).json({
//             status: "Success",
//             message: "Successfully deleted"
//         })
//     } catch (error) {
//         res.status(404).json({
//             status: "Failure",
//             message: error.message
//         })
//     }
// }


module.exports = {
    createSchools,
    getAllSchools,
    getSchoolsById,
    updateSchoolsById,
    deleteSchoolById
    // deleteAllSchools
}