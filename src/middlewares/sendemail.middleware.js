    import nodemailer from "nodemailer";

    // Configure email and send it.
    async function sendMail({applicantEmail, message}){
        console.log(applicantEmail, message);
        // I am getting correct email address here 

        //  Create an email transporter
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'nagdaneha97@gmail.com',
                pass:'rylb sysd umyl hkcd'
            }
        })

        // 2. Configure email content
        const mailOptions = {
            from:"nagdaneha97@gmail.com",
            to:applicantEmail,
            subject:"Jobbing will make your job search easy like jogging",
            text:message
        }

        // 3. Send the email
        try{
            const result = await transporter.sendMail(mailOptions);
            console.log("mail sent successfully");
        } catch (err) {
            console.log("email send failed ", err);
        }

    }

    export default sendMail;