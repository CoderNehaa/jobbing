export default class Jobmodel{
    constructor(){

    }

    createNewJob(){
        // creating a new job
    }
    
    static getAllJobs(){
        // retrieving all jobs
        return jobs;
    }
    
    static getJobById(id){
        // finding a job by its id
        const job = jobs.find(obj => obj.id == id);
        const otherJobs = jobs.filter(obj => obj.id != id);
        const result = {
            job:job, 
            otherJobs:otherJobs
        }
        return result;
    }
    
    updateJob(){
        // updating a job
    }
    
    static addNewApplicantToJob({name, email, contact, resume, jobId}){
        // adding a new applicant to job
        const applicant = {
            id:Date.now().toLocaleString,
            name,
            email,
            contact,
            resume
        }
        const selectedJob = jobs.find((job) => job.id == jobId)
        selectedJob.applicants.push(applicant);
        console.log(jobs);
    }
    
    getAllApplicantsOfJob(){
        // retrieving all applicants for a job
    }
    
    deleteJob(){
        // deleting a job
    }       
}

let jobs = [
    {
        id:1,
        jobcategory:'software',
        jobdesignation:'Front-end developer',
        jobloction:"remote",
        companyname:"Trievous",
        salary:45000,
        applyby:"04-04-2024",
        skills:['HTML', 'CSS', 'JS', 'React'],
        numberofopenings:20,
        jobposted:"03-04-2024 10:00PM",
        experiencerequired:"24",
        applicants:[
            {
                id:4,
                name:"demo",
                contact:9874561230,
                email:"demo@gmail.com",
            },
            {
                id:1,
                name:"Neha",
                contact:987641230,
                email:"neha@gmail.com"
            }        
        ]
    }, 
    {
        id:2,
        jobcategory:'software',
        jobdesignation:'Back-end developer',
        jobloction:"Udaipur",
        companyname:"Kansoft",
        salary:55000,
        applyby:"10-04-2024",
        skills:['NodeJS', 'Javascript', 'MongoDB', 'ExpressJS'],
        numberofopenings:5,
        experiencerequired:"0",
        jobposted:"01-04-2024 10:00PM",
        applicants:[
            {
                id:56,
                name:"dummy",
                contact:8794561230,
                email:"dummy@gmail.com"
            }      
        ]
    },
    {
        id:3,
        jobcategory:'software',
        jobdesignation:'Full-stack developer',
        jobloction:"Mumbai",
        companyname:"TCS",
        salary:75000,
        applyby:"20-04-2024",
        skills:['NodeJS', 'Javascript', 'React', 'ExpressJS'],
        numberofopenings:10,
        experiencerequired:"36",
        jobposted:"05-04-2024 09:00AM",
        applicants:[]
    }, 
]
