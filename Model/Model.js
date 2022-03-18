const mongoose = require ("mongoose")
const schoolsSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Field cannot be empty']

    },
    // lastname: {
    //     type: String,
    //     required: [true, 'Field cannot be empty']

    // }
    // email: {
    //     type: String,
    //     required: [true, 'Field cannot be empty']
    // },

    // password: {
    //     type: String,
    //     required: true

    // },

    // Note: {
    //     type: String,
    //     required: [true, 'Field cannot be empty']
    // },
    
    //  createdAt: {
    //     type: Date,
    //     default: new Date()
    // },
   
    // createdBy: {
    //     type: String,
    //     default: "Gabby"
    // }

    image: {
        type: String,
        required: [true, 'Field cannot be empty']
    },

    imageURL: {
        type: String,
        required: [true, 'Field cannot be empty']
    },

    imageID: {
        type: String,
        required: [true, 'Field cannot be empty']
    }
   
})

module.exports = mongoose.model("schoolsCollections", schoolsSchema)