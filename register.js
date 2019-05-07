console.log("Hello")
function register(){

            

    console.log("Inside Register");
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var cpassword=document.getElementById("cpassword").value;
    var eid=document.getElementById("eid").value;
    var company=document.getElementById("company").value;
    console.log(company);
    var newUser = {
        name: name,
        email: email,
        eid: eid,
        companyname: company,
        password: password,
        password2: cpassword,
     };
    console.log(newUser);


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.response== "You are registered")
        {
            window.location.href = "file:///home/progmax/sih/apnafront/regconf.html";
        }
        else
        {
            document.getElementById("result").innerHTML=this.response;
        }


    };
    xhttp.open("POST", "https://gullyboys.herokuapp.com/user_register/register" , true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(newUser));
    console.log("Request sent");
}

