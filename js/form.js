function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      tel: document.getElementById("tel").value,
    //   message: document.getElementById("message").value,
    };
  
    const serviceID = "service_om3i8ze";
    const templateID = "template_vyytjab";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
        document.getElementById("tel").value = "",
        //   document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }