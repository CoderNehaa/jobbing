import path from "path"
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import UserController from "./src/controller/user.controller.js";
import JobController from "./src/controller/job.controller.js";
import upload from "./src/middlewares/resumeupload.middleware.js";

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');
app.set("views", path.join(path.resolve(), "src", "views"))

app.use(expressEjsLayouts);
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const userController = new UserController();
const jobController = new JobController();

app.get('/', userController.getHomePage);
app.get('/login', userController.getLoginPage);                   
app.get('/register', userController.getRegisterPage);
app.get('/jobs', jobController.getAllJobs)                     //retrieve all job listings

app.post('/register', userController.handleRegistration)       //register a new recruiter acccount
app.post('/login', userController.handleLogin)                 //login as recruiter
// app.post('/logout', )                                       //logout the currently logged-in recruiter

app.get('/jobs/:id', jobController.getAllDetailsOfJob)       //retrieve a specific job listing by id
app.get('/apply/:id', jobController.getJobApplicationPage);     

app.post('/apply/:id', upload.single('resume'), jobController.applyForJob);      //Apply to a specific job listing by id, uploading a resume

// app.post('/jobs',   )         //create a new job listing
// app.put('/jobs/:id', )        //update a specific job listing by id
// app.delete('/jobs/:id',   )   //delete a specific job listing by id

// app.get('/jobs/:id/applicants',   )                           //Retrieve all applicants for a specific job listing
// app.post('/jobs/:id/applicants',   )                          // Add a new applicant to a specific job listing
// app.get('/jobs/:id/applicants/:applicantId',   )              // Retrieve a specific applicant by id for a job listing
// app.put('/jobs/:id/applicants/:applicantId',   )              // Update a specific applicant by id for a job listing
// app.delete('/jobs/:id/applicants/:applicantId',   )           // Delete a specific applicant by id for a job listing

// app.get('/jobs/:id/update', )                                 // Render the update form for a specific job listing
// app.post('/jobs/:id/update',  )                               // update a specific job listing by id

// app.get('/jobs/:id/delete',   )                               // deletes a specific job listing by id, 

// app.get('/404', )                                             //Render the 404 error page








