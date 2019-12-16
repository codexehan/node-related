var nodemailer = require('nodemailer');

/*var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'your.gmail.account@gmail.com',
        pass: 'your.password'
    }
});*/
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth:{
        user:'',
        pass:''
    }
});

var mailOptions = {
    from:'',
    to:'',
    subject:'Sending Email using Node.js',
    text:'That was easy!'
}

transporter.sendMail(mailOptions, function(error, info){
   if(error){
       console.log(error);
   } else{
       console.log('Email send: '+ info.response);
   }
});