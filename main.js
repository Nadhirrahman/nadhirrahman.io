function sendMail(params){
    var tempParams = {
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        subject:document.getElementById("subj").value,
        message:document.getElementById("msg").value,
    };

    emailjs.send('gmail', 'template_uzw29e1', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}