console.log("Hello")
function login(){

    
    console.log("Inside Login");
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var newLogin = {
        email: email,
        password: password,
     };
    console.log(newLogin);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
            
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response.eid);
            if(this.response == 'Unknown User')
            {
                console.log(this.response);
                alert('Unknown User');
                document.getElementById('result').innerHTML= this.response;
            }
            else if(this.response == 'Invalid Password')
            {
                console.log(this.response);
                document.getElementById('result').innerHTML= this.response;
            }
            else if(typeof(this.response.eid))
            {
                sessionStorage.setItem('uid',this.response);
                console.log(this.response);
                window.location.href = "index.html";
            }
           
        }
        


    };
    xhttp.open("POST", "https://gullyboys.herokuapp.com/user_register/login" , true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(newLogin));
    console.log("Request sent");
   
}

var code;
function createCaptcha() {
    //clear the contents of captcha div first 
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
        //below code will not allow Repetition of Characters
        var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
        if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
        else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 120;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}
function validateCaptcha() 
{
    console.log("Inside Validation");
    event.preventDefault();
    debugger
    if (document.getElementById("cpatchaTextBox").value == code) 
    {
        login();
    }
    else
    {
        alert("Invalid Captcha. try Again");
        createCaptcha();
    }
}

