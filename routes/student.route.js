var express = require('express');
var router = express.Router();
const StudentModel = require("../models/student.model");


// import controller
const StudentController = require("../controllers/student.controller");

// default  route as given in app.js /students  as below 
router.get('/', (req, res)=> {
    res.send('Welcome Students')
});

// http://localhost:3000/students/add-student
router.post('/add-student', StudentController.add_student);

// http://localhost:3000/students/get-all-students
router.get('/get-all-students', StudentController.get_student);

// http://localhost:3000/students/getStudentByFirstName?fisrtName=Ram
router.get('/getStudentByFirstName', StudentController.get_student_by_first_name);

// http://localhost:3000/students/update-student?_id=616d87940152a10f30df9ce8
router.put('/update-student', StudentController.update_student_by_id);

// http://localhost:3000/students/delete_student?_id=616e7216d0bf5739dda22b86
router.delete('/delete_student', StudentController.delete_student);

module.exports = router;






