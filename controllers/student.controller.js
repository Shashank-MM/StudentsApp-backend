// import student model
const StudentModel = require("../models/student.model");

module.exports =  { 
    add_student : async(req, res)=> {
        let newStudent = new StudentModel({
            fisrtName: req.body.fisrtName,
            lastName: req.body.lastName,
            age: req.body.age,   
            dob: req.body.dob,
            department: req.body.department
        });
        await newStudent.save(function(err, newStudent){
            if(err)
                res.send(err);
            else
            res.send({status:200, msg:'post: /add-student  works', studentObj: newStudent});
        });
    },
    
    get_student : async (req, res,next)=> {
        StudentModel.find(function(err,response){
            if(err)
            res.send(err);
            else
            res.send({status:200, resultFound: response.length, student: response });
        });
    },

    get_student_by_first_name : async (req, res, next) => {
        const firstNameQuery = req.query.fisrtName;
        StudentModel.find({fisrtName: firstNameQuery}, function(err, response){
            if(err)
                res.send(err);
            else
                res.send({status:200, resultFound: response.length,  student: response });
        });
    },

    update_student_by_id :  (req, res, next)=> {
        const studentId = req.query._id;
        StudentModel.findByIdAndUpdate(studentId, { $set: req.body}, function(err,response)
        {
            if(err)
                res.send(err);
            else
                StudentModel.findById(studentId, function(err,response)
                {
                   res.send( response );
                });
        });    
    },

    delete_student: (req, res, next) => {
        const studentid = req.query._id;
        StudentModel.findByIdAndDelete( studentid, function(err,response){
            if(err)
                res.send("data no");
            else
                console.log("record with "+ studentid + " has been deleted"); 
                res.send({status:200, student: response });
        });
    }
}
