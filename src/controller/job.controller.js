import Jobmodel from "../model/job.model.js";
import sendMail from "../middlewares/sendemail.middleware.js";

export default class JobController{
    createJob(){
    
    }
    
    updateJob(){
    
    }
    
    deleteJob(){
    
    }
    
    manageJobApplicants(){
        // Manage job applicants
    }

    getAllJobs(req, res){
        let jobs = Jobmodel.getAllJobs()
        res.render('joblisting', {jobs:jobs})
    }

    getJobApplicationPage(req, res){
        const {id} = req.params;
        res.render("jobapplication", {jobId:id});
    }

    getAllDetailsOfJob(req, res){
        const {id} = req.params;
        const result = Jobmodel.getJobById(id);
        res.render("jobDetails", {job:result.job, otherJobs:result.otherJobs});
    }

    applyForJob(req, res){
        const {name, email, contact, jobId} = req.body;
        const resume = req.file.filename;
        Jobmodel.addNewApplicantToJob({name, email, contact, resume, jobId});
        sendMail({applicantEmail:email, message:"You have sucessfully applied for this job"})
        res.redirect('/jobs');
    }
}

